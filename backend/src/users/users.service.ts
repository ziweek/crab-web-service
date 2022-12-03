import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AcceptFriendshipDto } from './dto/acceptFriendshipDto';
import { CreateUserDto } from './dto/createUserDto';
import { DeleteFriendshipDto } from './dto/deleteFriendshipDto';
import { RejectFriendshipDto } from './dto/rejectFriendshipDto';
import { RequestFriendshipDto } from './dto/requestFriendshipDto';
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
    requestFriendshipDto: RequestFriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (
      existedUser.requesteingFriendIds.includes(requestFriendshipDto.targetId)
    ) {
      return { result: false };
    }
    existedUser.requesteingFriendIds.push(requestFriendshipDto.targetId);
    const targetedUser = await this.usersRepository.findOne({
      where: { id: requestFriendshipDto.targetId },
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
    acceptFriendshipDto: AcceptFriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (existedUser.acceptedFriendIds.includes(acceptFriendshipDto.targetId)) {
      return { result: false };
    }
    existedUser.requestedFriendIds = existedUser.requestedFriendIds.filter(
      (e) => {
        e !== id;
      },
    );
    existedUser.acceptedFriendIds.push(acceptFriendshipDto.targetId);
    const targetedUser = await this.usersRepository.findOne({
      where: { id: acceptFriendshipDto.targetId },
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
    rejectFriendshipDto: RejectFriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    existedUser.requestedFriendIds = existedUser.requestedFriendIds.filter(
      (e) => {
        Number(e) !== rejectFriendshipDto.targetId;
      },
    );
    const targetedUser = await this.usersRepository.findOne({
      where: { id: rejectFriendshipDto.targetId },
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
    deleteFriendshipDto: DeleteFriendshipDto,
  ): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    existedUser.acceptedFriendIds = existedUser.acceptedFriendIds.filter(
      (e) => {
        e !== deleteFriendshipDto.targetId;
      },
    );
    const targetedUser = await this.usersRepository.findOne({
      where: { id: deleteFriendshipDto.targetId },
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
