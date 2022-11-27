import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<any[]> {
    // return ['findAllUsers'];
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findOneUser(@Param() param): Promise<any[]> {
    return ['findOneUser', `${param.id}`];
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    // return ['createUser', `${createUserDto}`];
    this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  async updateUser(@Param() param): Promise<any[]> {
    return ['updateUser', `${param.id}`];
  }

  @Delete(':id')
  async deleteUser(@Param() param): Promise<any[]> {
    return ['deleteUser', `${param.id}`];
  }
}
