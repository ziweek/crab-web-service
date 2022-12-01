import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FriendshipsService } from './friendships.service';

@Controller('friendships')
export class FriendshipsController {
  constructor(private friendshipsService: FriendshipsService) {}

  // @Get()
  // @ApiOperation({ summary: 'aa' })
  // async findAllUsers(): Promise<any[]> {
  //   return this.friendshipsService.findAllUsers();
  // }

  // @Get(':id')
  // findOneUser(@Param() param) {
  //   // console.log(param.id);
  //   return this.friendshipsService.findOneUser(param.id);
  //   // return ['findOneUser', `${param.id}`];
  // }

  // @Post()
  // async createUser(@Body() createUserDto: CreateUserDto) {
  //   this.friendshipsService.createUser(createUserDto);
  // }

  // @Patch(':id')
  // updateUser(@Param() param, @Body() createUserDto: CreateUserDto) {
  //   return this.friendshipsService.updateUser(param.id, createUserDto);
  // }

  // @Delete(':id')
  // deleteUser(@Param() param) {
  //   this.friendshipsService.deleteUser(param.id);
  // }
}
