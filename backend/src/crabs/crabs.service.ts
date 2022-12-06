import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { CreateCrabDto } from './dto/createCrabDto';
import { Crab } from './entity/crab.entity';

@Injectable()
export class CrabsService {
  @InjectRepository(Crab)
  private readonly crabsRepository: Repository<Crab>;

  @InjectRepository(User)
  private readonly usersRepository: Repository<Crab>;

  async findAllCrab(): Promise<Crab[]> {
    return await this.crabsRepository.find();
  }

  async findCrab(userId: number): Promise<Crab[]> {
    return await this.crabsRepository.find({ where: { user: { id: userId } } });
  }

  async createCrab(req): Promise<Crab> {
    return await this.crabsRepository.save(req);
  }

  async updateCrab(req): Promise<Crab> {
    return await this.crabsRepository.save(req);
  }

  async deleteCrab(req): Promise<Crab> {
    return await this.crabsRepository.save(req);
  }
}
