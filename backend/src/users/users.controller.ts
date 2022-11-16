import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './createUserDto';

@Controller('users')
export class UsersController {
  @Get()
  async findAllUsers(): Promise<any[]> {
    return ['findAllUsers'];
  }

  @Get(':id')
  async findOneUser(@Param() param): Promise<any[]> {
    return ['findOneUser', `${param.id}`];
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any[]> {
    return ['createUser', `${createUserDto}`];
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
