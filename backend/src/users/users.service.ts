import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  createUser(user: User) {
    this.users.push(user);
  }

  findAllUsers() {
    return this.users;
  }
}
