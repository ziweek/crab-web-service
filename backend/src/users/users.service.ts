import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FriendshipDto } from './dto/friendshipDto';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // const savedUser = await this.usersRepository.save(createUserDto);
    // const emptyCreateFriendshipDto = new CreateFriendshipDto();
    // emptyCreateFriendshipDto.acceptedFriends = [];
    // emptyCreateFriendshipDto.requestedFriends = [];
    // const savedFriendship = await this.friendshipsService.createOneFriendship(
    //   emptyCreateFriendshipDto,
    // );
    // savedUser.friendship = savedFriendship;
    return await this.usersRepository.save(createUserDto);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOneUser(id: number): Promise<User> {
    // const targetUser = this.authService.tokenValidateUser()
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async deleteUser(id: number): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (existedUser) {
      await this.usersRepository.delete(id);
      return { result: true };
    } else {
      throw new Error('유저가 존재하지 않았습니다.');
      return { result: false };
    }
  }

  async updateUser(id: number, createUserDto: CreateUserDto): Promise<any> {
    const existedUser = this.usersRepository.findOne({ where: { id: id } });
    if (existedUser) {
      await this.usersRepository.update(id, {
        name: createUserDto.name,
        phone: createUserDto.phone,
        email: createUserDto.email,
        password: createUserDto.password,
        nickname: createUserDto.nickname,
        text: createUserDto.text,
        profileImg: createUserDto.profileImg,
        isActive: createUserDto.isActive,
        region: createUserDto.region,
      });
      return await this.usersRepository.findOne({ where: { id: id } });
    }
  }

  async requestFriendship(
    id: number,
    friendshipDto: FriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (existedUser.requesteingFriendIds.includes(friendshipDto.targetId)) {
      return { result: false };
    }
    existedUser.requesteingFriendIds.push(friendshipDto.targetId);
    const targetedUser = await this.usersRepository.findOne({
      where: { id: friendshipDto.targetId },
    });
    if (targetedUser.requestedFriendIds.includes(Number(id))) {
      return { result: false };
    }
    targetedUser.requestedFriendIds.push(Number(id));
    const newExistedUser = await this.usersRepository.save(existedUser);
    const newTargetedUser = await this.usersRepository.save(targetedUser);
    return { newExistedUser, newTargetedUser };
  }

  async acceptFriendship(
    id: number,
    friendshipDto: FriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (existedUser.acceptedFriendIds.includes(friendshipDto.targetId)) {
      return { result: false };
    }
    existedUser.requestedFriendIds = existedUser.requestedFriendIds.filter(
      (e) => {
        e !== id;
      },
    );
    existedUser.acceptedFriendIds.push(friendshipDto.targetId);
    const targetedUser = await this.usersRepository.findOne({
      where: { id: friendshipDto.targetId },
    });
    if (targetedUser.acceptedFriendIds.includes(Number(id))) {
      return { result: false };
    }
    targetedUser.requesteingFriendIds =
      targetedUser.requesteingFriendIds.filter((e) => {
        e !== id;
      });
    targetedUser.acceptedFriendIds.push(Number(id));
    const newExistedUser = await this.usersRepository.save(existedUser);
    const newTargetedUser = await this.usersRepository.save(targetedUser);
    return { newExistedUser, newTargetedUser };
  }

  async rejectFriendship(
    id: number,
    friendshipDto: FriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    existedUser.requestedFriendIds = existedUser.requestedFriendIds.filter(
      (e) => {
        Number(e) !== friendshipDto.targetId;
      },
    );
    const targetedUser = await this.usersRepository.findOne({
      where: { id: friendshipDto.targetId },
    });
    targetedUser.requesteingFriendIds =
      targetedUser.requesteingFriendIds.filter((e) => {
        Number(e) !== id;
      });
    const newExistedUser = await this.usersRepository.save(existedUser);
    const newTargetedUser = await this.usersRepository.save(targetedUser);
    return { newExistedUser, newTargetedUser };
  }

  async deleteFriendship(
    id: number,
    friendshipDto: FriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    existedUser.acceptedFriendIds = existedUser.acceptedFriendIds.filter(
      (e) => {
        e !== friendshipDto.targetId;
      },
    );
    const targetedUser = await this.usersRepository.findOne({
      where: { id: friendshipDto.targetId },
    });
    targetedUser.acceptedFriendIds = targetedUser.acceptedFriendIds.filter(
      (e) => {
        e !== id;
      },
    );
    const newExistedUser = await this.usersRepository.save(existedUser);
    const newTargetedUser = await this.usersRepository.save(targetedUser);
    return { newExistedUser, newTargetedUser };
  }
}
