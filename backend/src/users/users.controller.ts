import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { AcceptFriendshipDto } from './dto/acceptFriendshipDto';
import { CreateUserDto } from './dto/createUserDto';
import { RejectFriendshipDto } from './dto/rejectFriendshipDto';
import { RequestFriendshipDto } from './dto/requestFriendshipDto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('User API')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @UseGuards(AuthGuard)
  @Get('/all')
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

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: '유저 조회하기' })
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
  findOneUser(@Req() req) {
    console.log(req.user);
    return this.userService.findOneUser(req.user.id);
    // return ['findOneUser', `${param.id}`];
  }

  // @Post()
  // @ApiOperation({ summary: '유저 생성하기' })
  // @ApiCreatedResponse({
  //   description: '생성된 유저 반환',
  //   schema: {
  //     example: {
  //       name: 'test',
  //       phone: '01012345678',
  //       email: 'admin@amdin.com',
  //       password: 'test',
  //       nickname: null,
  //       text: null,
  //       profileImg: null,
  //       region: null,
  //       deleteAt: null,
  //       id: 3,
  //       createAt: '2022-11-30T06:06:02.020Z',
  //       updateAt: '2022-11-30T06:06:02.020Z',
  //     },
  //   },
  // })
  // createUser(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.createUser(createUserDto);
  // }

  @UseGuards(AuthGuard)
  @Patch()
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
  updateUser(@Req() req, @Body() createUserDto: CreateUserDto) {
    return this.userService.updateUser(req.user.id, createUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete()
  @ApiOperation({ summary: '유저 삭제하기' })
  @ApiCreatedResponse({
    description: '반환 없음',
    schema: {
      example: {},
    },
  })
  deleteUser(@Req() req) {
    this.userService.deleteUser(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Patch('requestFriendship')
  @ApiOperation({ summary: '친구신청 요청하기' })
  @ApiCreatedResponse({
    description: '반환 없음',
    schema: {
      example: {},
    },
  })
  requestFriendship(
    @Req() req,
    @Body() requestFriendshipDto: RequestFriendshipDto,
  ) {
    return this.userService.requestFriendship(
      req.user.id,
      requestFriendshipDto,
    );
  }

  @UseGuards(AuthGuard)
  @Patch('acceptFriendship')
  @ApiOperation({ summary: '친구신청 수락하기' })
  @ApiCreatedResponse({
    description: '반환 없음',
    schema: {
      example: {},
    },
  })
  acceptFriendship(
    @Req() req,
    @Body() acceptFriendshipDto: AcceptFriendshipDto,
  ) {
    return this.userService.acceptFriendship(req.user.id, acceptFriendshipDto);
  }

  @UseGuards(AuthGuard)
  @Patch('rejectFriendship')
  @ApiOperation({ summary: '친구신청 거절하기' })
  @ApiCreatedResponse({
    description: '반환 없음',
    schema: {
      example: {},
    },
  })
  rejectFriendship(
    @Req() req,
    @Body() rejectFriendshipDto: RejectFriendshipDto,
  ) {
    return this.userService.rejectFriendship(req.user.id, rejectFriendshipDto);
  }

  @UseGuards(AuthGuard)
  @Patch('deleteFriendship/:id')
  @ApiOperation({ summary: '친구 신청하기' })
  @ApiCreatedResponse({
    description: '반환 없음',
    schema: {
      example: {},
    },
  })
  deleteFriendship(
    @Req() req,
    @Body() rejectFriendshipDto: RejectFriendshipDto,
  ) {
    return this.userService.deleteFriendship(req.user.id, rejectFriendshipDto);
  }
}
