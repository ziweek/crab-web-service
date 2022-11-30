import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // private readonly authService: AuthService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(createUserDto);
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
      });
    }
  }
}
