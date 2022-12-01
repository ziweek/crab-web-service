import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddFriendDto } from './dto/addFriendDto';
import { CreateUserDto } from './dto/createUserDto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('User API')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '전체 유저 조회하기' })
  @ApiCreatedResponse({
    description: '전체 유저 반환',
    schema: {
      example: [
        {
          id: 1,
          name: 'test',
          nickname: null,
          text: null,
          profileImg: null,
          phone: 1012345678,
          email: 'test@amdin.com',
          region: null,
          password:
            '$2b$10$AqVvjdFb8nI2TxmRpLqEBOOczztK5UABnb7..bkOa0N.HeBGHdIzO',
          createAt: '2022-11-30T05:54:13.099Z',
          updateAt: '2022-11-30T05:54:13.099Z',
          deleteAt: null,
          authority: null,
          requestedFriendship: [],
          responsedFriendship: [],
        },
        {
          id: 2,
          name: 'test',
          nickname: null,
          text: null,
          profileImg: null,
          phone: 1012345678,
          email: 'test2@amdin.com',
          region: null,
          password:
            '$2b$10$yPPJxWm86jo/2.jRQqr1xONOnzusThKsnRzyXi/bOga5KFXmXAiBW',
          createAt: '2022-11-30T05:59:32.865Z',
          updateAt: '2022-11-30T05:59:32.865Z',
          deleteAt: null,
          authority: null,
          requestedFriendship: [],
          responsedFriendship: [],
        },
      ],
    },
  })
  async findAllUsers(): Promise<any[]> {
    // return ['findAllUsers'];
    return this.userService.findAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: '유저 하나 조회하기' })
  @ApiCreatedResponse({
    description: '생성된 유저 반환',
    schema: {
      example: {
        name: 'test',
        phone: '01012345678',
        email: 'admin@amdin.com',
        password: 'test',
        nickname: null,
        text: null,
        profileImg: null,
        region: null,
        deleteAt: null,
        id: 3,
        createAt: '2022-11-30T06:06:02.020Z',
        updateAt: '2022-11-30T06:06:02.020Z',
      },
    },
  })
  findOneUser(@Param() param) {
    // console.log(param.id);
    return this.userService.findOneUser(param.id);
    // return ['findOneUser', `${param.id}`];
  }

  @Post()
  @ApiOperation({ summary: '유저 생성하기' })
  @ApiCreatedResponse({
    description: '생성된 유저 반환',
    schema: {
      example: {
        name: 'test',
        phone: '01012345678',
        email: 'admin@amdin.com',
        password: 'test',
        nickname: null,
        text: null,
        profileImg: null,
        region: null,
        deleteAt: null,
        id: 3,
        createAt: '2022-11-30T06:06:02.020Z',
        updateAt: '2022-11-30T06:06:02.020Z',
      },
    },
  })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: '유저 수정하기' })
  @ApiCreatedResponse({
    description: '수정된 유저 반환',
    schema: {
      example: {
        name: 'test',
        phone: '01012345678',
        email: 'admin@amdin.com',
        password: 'test',
        nickname: null,
        text: null,
        profileImg: null,
        region: null,
        deleteAt: null,
        id: 3,
        createAt: '2022-11-30T06:06:02.020Z',
        updateAt: '2022-11-30T06:06:02.020Z',
      },
    },
  })
  updateUser(@Param() param, @Body() createUserDto: CreateUserDto) {
    return this.userService.updateUser(param.id, createUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '유저 삭제하기' })
  @ApiCreatedResponse({
    description: '반환 없음',
    schema: {
      example: {},
    },
  })
  deleteUser(@Param() param) {
    this.userService.deleteUser(param.id);
  }

  // @Patch('setFriend/:id')
  // @ApiOperation({ summary: '친구 추가하기' })
  // @ApiCreatedResponse({
  //   description: '반환 없음',w
  //   schema: {
  //     example: {},
  //   },
  // })
  // setFriend(@Param() param, @Body() addFriendDto: AddFriendDto) {
  //   this.userService.setFriend(param.id, addFriendDto);
  // }
}
