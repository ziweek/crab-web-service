import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { CreateFriendshipDto } from './dto/createFriendshipDto';
import { Friendship } from './entity/friendship.entity';

@Injectable()
export class FriendshipsService {
  constructor(
    @InjectRepository(Friendship)
    private friendshipsRepository: Repository<Friendship>,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAllFriendship(): Promise<Friendship[]> {
    return await this.friendshipsRepository.find();
  }

  async findOneFriendship(id: number): Promise<Friendship> {
    return await this.friendshipsRepository.findOne({ where: { id: id } });
  }

  //   async createOneFriendship(
  //     createFriendshipDto: CreateFriendshipDto,
  //   ): Promise<any> {
  //     const targetUser = await this.usersRepository.findOne({
  //       where: { id: createFriendshipDto.id },
  //     });
  //     targetUser.friendship;
  //     await this.usersRepository.save(targetUser);
  //     await this.friendshipsRepository.save(createFriendshipDto);
  //   }

  //   async updataOneFriendship(
  //     id: number,
  //     createFriendshipDto: CreateFriendshipDto,
  //   ): Promise<Friendship> {
  //     const updatedCreateFriendshipDto = createFriendshipDto;
  //     updatedCreateFriendshipDto.acceptedFriends =
  //       createFriendshipDto.acceptedFriends;
  //     updatedCreateFriendshipDto.requestedFriends =
  //       createFriendshipDto.requestedFriends;
  // return await this.friendshipsRepository.save(updatedCreateFriendshipDto);
  //   }
}
