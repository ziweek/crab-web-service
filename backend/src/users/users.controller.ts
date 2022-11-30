import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUserDto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('User API')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '전체 유저 조회하기' })
  async findAllUsers(): Promise<any[]> {
    // return ['findAllUsers'];
    return this.userService.findAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: '유저 하나 조회하기' })
  findOneUser(@Param() param) {
    // console.log(param.id);
    return this.userService.findOneUser(param.id);
    // return ['findOneUser', `${param.id}`];
  }

  @Post()
  @ApiOperation({ summary: '유저 생성하기' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: '유저 수정하기' })
  updateUser(@Param() param, @Body() createUserDto: CreateUserDto) {
    return this.userService.updateUser(param.id, createUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '유저 삭제하기' })
  deleteUser(@Param() param) {
    this.userService.deleteUser(param.id);
  }
}
