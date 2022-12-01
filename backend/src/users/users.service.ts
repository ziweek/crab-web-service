import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFriendshipDto } from 'src/friendships/dto/createFriendshipDto';
import { Friendship } from 'src/friendships/entity/friendship.entity';
import { FriendshipsService } from 'src/friendships/friendships.service';
import { Repository } from 'typeorm';
import { AddFriendDto } from './dto/addFriendDto';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    private friendshipsService: FriendshipsService,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
    // private readonly authService: AuthService,
    @InjectRepository(Friendship)
    private friendshipsRepository: Repository<Friendship>, // private readonly authService: AuthService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const savedUser = await this.usersRepository.save(createUserDto);
    const emptyCreateFriendshipDto = new CreateFriendshipDto();
    emptyCreateFriendshipDto.acceptedFriends = [];
    emptyCreateFriendshipDto.requestedFriends = [];
    const savedFriendship = await this.friendshipsService.createOneFriendship(
      emptyCreateFriendshipDto,
    );
    savedUser.friendship = savedFriendship;
    return await this.usersRepository.save(createUserDto);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOneUser(id: number): Promise<User> {
    // const targetUser = this.authService.tokenValidateUser()
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async updateUser(id: number, createUserDto: CreateUserDto): Promise<void> {
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
        region: createUserDto.region,
      });
    }
  }

  async requestFriendship(
    id: number,
    addFriendDto: AddFriendDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    const friendshipId = existedUser.friendship.id;
    const existedFriendship = await this.friendshipsRepository.findOne({
      where: { id: friendshipId },
    });
    const targetUser = await this.usersRepository.findOne({
      where: { id: addFriendDto.targetId },
    });
    // existedFriendship.requestedFriendIds.push(addFriendDto.targetId);
    existedFriendship.requestedFriends[
      existedFriendship.requestedFriends.length
    ] = targetUser;
    await this.usersRepository.save(existedFriendship);
    existedUser.friendship = existedFriendship;
    return await this.usersRepository.save(existedUser);
  }

  // async setFriend(id: number, addFriendDto: AddFriendDto): Promise<User> {
  //   const reqUser = await this.usersRepository.findOne({
  //     where: { id: id },
  //   });
  //   console.log(reqUser.friends);
  //   reqUser.friends[reqUser.friends.length] = addFriendDto.resId;
  //   await this.usersRepository.save(reqUser);
  //   const resUser = await this.usersRepository.findOne({
  //     where: { id: addFriendDto.resId },
  //   });
  //   resUser.friends[resUser.friends.length] = addFriendDto.resId;
  //   await this.usersRepository.save(resUser);
  //   return reqUser;
  // }
}
