import { Logger, OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { emit } from 'process';
import { Namespace, Socket } from 'socket.io';

let createdRoom: string[] = [];

interface MessagePayload {
  roomName: string;
  message: string;
}

@WebSocketGateway({ namespace: 'chat' })
// OnGatewayInit,
// OnGatewayConnection,
// OnGatewayDisconnect
export class EventsGateway implements OnModuleInit {
  private logger = new Logger('Gateway');

  @WebSocketServer()
  nsp: Namespace;

  onModuleInit() {
    this.nsp.on('connect', (socket) => {
      this.logger.log(`events module init - ${socket.id}`);
    });
  }

  afterInit() {
    this.nsp.adapter.on('delete-room', (room) => {
      const deletedRoom = createdRoom.find(
        (createdRoom) => createdRoom === room,
      );
      if (!deletedRoom) {
        return;
      }
      this.nsp.emit('delete-room', deletedRoom);
      createdRoom = createdRoom.filter(
        (createdRoom) => createdRoom !== deletedRoom,
      );
    });
    this.logger.log('socket reboot');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Connected - ${socket.id}`);
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Disconnected - ${socket.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() messagePayload: MessagePayload,
  ) {
    socket
      .to(messagePayload.roomName)
      .emit('message', { username: socket.id, messagePayload });
    return { username: socket.id, messagePayload };
  }

  @SubscribeMessage('room-list')
  handleRoomList(@ConnectedSocket() socket: Socket) {
    this.logger.log(`roomList - ${createdRoom}`);
    // this.nsp.emit('message', createdRoom);
  }

  @SubscribeMessage('create-room')
  handleCreateRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() messagePayload: MessagePayload,
  ) {
    const existedChatroom = createdRoom.find(
      (createdRoom) => createdRoom === messagePayload.roomName,
    );
    if (existedChatroom) {
      this.logger.log(`existedRoom - ${messagePayload.roomName}`);
      return {
        result: false,
        payload: `${messagePayload.roomName} 방이 이미 존재합니다.`,
      };
    }

    socket.join(messagePayload.roomName);
    createdRoom.push(messagePayload.roomName);
    this.nsp.emit('create-room', messagePayload.roomName);
    this.logger.log(`createRoom - ${messagePayload.roomName}`);
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() messagePayload: MessagePayload,
  ) {
    socket.join(messagePayload.roomName);
    socket.broadcast.to(messagePayload.roomName).emit('message', {
      message: `${socket.id}가 ${messagePayload.roomName}에 입장하였습니다.`,
    });
    return { result: true };
  }

  @SubscribeMessage('leave-room')
  handleLeaveRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() messagePayload: MessagePayload,
  ) {
    socket.leave(messagePayload.roomName);
    socket.broadcast.to(messagePayload.roomName).emit('message', {
      message: `${socket.id}가 ${messagePayload.roomName}에 퇴장하였습니다.`,
    });
    return { result: true };
  }
}
