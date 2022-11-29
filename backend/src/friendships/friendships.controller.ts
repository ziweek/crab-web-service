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

@Controller('friendships')
export class FriendshipsController {
  //   @Get()
  //   @ApiOperation({ summary: 'aa' })
  //   async findAllUsers(): Promise<any[]> {
  //     // return ['findAllUsers'];
  //     return this.userService.findAllUsers();
  //   }
  //   @Get(':id')
  //   findOneUser(@Param() param) {
  //     // console.log(param.id);
  //     return this.userService.findOneUser(param.id);
  //     // return ['findOneUser', `${param.id}`];
  //   }
  //   @Post()
  //   async createUser(@Body() createUserDto: CreateUserDto) {
  //     this.userService.createUser(createUserDto);
  //   }
  //   @Patch(':id')
  //   updateUser(@Param() param, @Body() createUserDto: CreateUserDto) {
  //     return this.userService.updateUser(param.id, createUserDto);
  //   }
  //   @Delete(':id')
  //   deleteUser(@Param() param) {
  //     this.userService.deleteUser(param.id);
  //   }
}
