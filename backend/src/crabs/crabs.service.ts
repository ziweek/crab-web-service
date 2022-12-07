import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { In, Repository } from 'typeorm';
import { Crab } from './entity/crab.entity';

@Injectable()
export class CrabsService {
  constructor(
    @InjectRepository(Crab)
    private readonly crabsRepository: Repository<Crab>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAllCrab(): Promise<Crab[]> {
    return await this.crabsRepository.find();
  }

  async findCrab(req): Promise<any> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: req.user.id },
    });
    return existedUser.crabs;
    // return await this.crabsRepository.find({ where: { user: { id: userId } } });
  }

  async createCrab(req): Promise<Crab> {
    const existedUser = await this.usersRepository.findOne({
      where: { id: req.user.id },
    });
    const savedCrab = await this.crabsRepository.save(req.body);
    existedUser.crabs.push(savedCrab);
    await this.usersRepository.save(existedUser);
    return savedCrab;
  }

  // async updateCrab(userId: number, createCrabDto: CreateCrabDto): Promise<any> {
  //   const existedCrab = await this.crabsRepository.find({
  //     where: { id: userId },
  //   });
  //   if (existedCrab) {
  //     await this.crabsRepository.update(userId, {
  //       crabImageFile: createCrabDto.crabImageFile,
  //       receivedFriendIds: createCrabDto.receivedFriendIds,
  //       watchedFriendIds: createCrabDto.watchedFriendIds,
  //     });
  //   }
  // }

  async deleteCrab(req): Promise<any> {
    const existedCrab = await this.crabsRepository.findOne({
      where: { id: req.params.id, user: { id: req.user.id } },
    });
    if (existedCrab) {
      await this.crabsRepository.delete(req.params.id);
      return { result: true };
    } else {
      return { result: false };
    }
  }

  async getReceivedUsers(crabId: number): Promise<any> {
    const targetCrab = await this.crabsRepository.findOne({
      where: { id: crabId },
    });
    if (targetCrab) {
      const userList = this.usersRepository.find({
        where: { id: In(targetCrab.receivedFriendIds) },
      });
      return userList;
    } else {
      return { result: false };
    }
  }

  async getWatchedUsers(crabId: number): Promise<any> {
    const targetCrab = await this.crabsRepository.findOne({
      where: { id: crabId },
    });
    if (targetCrab) {
      const userList = this.usersRepository.find({
        where: { id: In(targetCrab.watchedFriendIds) },
      });
      return userList;
    }
    return { result: false };
  }
}
