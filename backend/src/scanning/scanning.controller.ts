import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { GetNearFriendsDto } from './dto/getNearFriendsDto';
import { GetNearPostsDto } from './dto/getNearPostsDto';
import { ScanningService } from './scanning.service';

@Controller('scanning')
@ApiTags('Scanning API')
export class ScanningController {
  constructor(private scanningService: ScanningService) {}

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '근처 친구의 포스트 조회하기' })
  @ApiCreatedResponse({
    description: '근처 포스트 반환',
    schema: {
      example: [
        {
          index: 1,
          distance: 200,
          post: {
            id: 3,
            title: '사거리가 쓴 글',
            content: '내용입니다.2',
            images: '이미지링크입니다.2',
            region: {
              lat: 37.5864,
              lng: 127.0325,
            },
            hidden: false,
            createAt: '2022-12-04T17:01:08.351Z',
            updateAt: '2022-12-04T17:01:08.351Z',
            deleteAt: null,
            author: {
              id: 3,
              name: 'user3',
              phone: 0,
              email: 'user3@amdin.com',
              password:
                '$2b$10$a.a/g6tBZIyucfvzLo77huTh2/V54mH5kneNwzZA9.0VrTzxPE1aO',
              nickname: '사거리',
              text: null,
              profileImg: null,
              region: {
                lat: 37.5864,
                lng: 127.0325,
              },
              requesteingFriendIds: [],
              requestedFriendIds: [],
              acceptedFriendIds: ['1'],
              createAt: '2022-12-04T16:59:52.521Z',
              updateAt: '2022-12-04T17:02:03.000Z',
              deleteAt: null,
              authority: null,
            },
            comments: [],
          },
        },
        {
          index: 0,
          distance: 400,
          post: {
            id: 2,
            title: '안암역이 쓴 글',
            content: '내용입니다.2',
            images: '이미지링크입니다.2',
            region: {
              lat: 37.5862,
              lng: 127.0295,
            },
            hidden: false,
            createAt: '2022-12-04T16:57:27.421Z',
            updateAt: '2022-12-04T16:57:27.421Z',
            deleteAt: null,
            author: {
              id: 2,
              name: 'user2',
              phone: 0,
              email: 'user2@amdin.com',
              password:
                '$2b$10$8pLUqQ3vJ.N/FyVI58ksX.ym877qKc21a/HRbmrQN4a9nuLVCKxx6',
              nickname: '안암역',
              text: null,
              profileImg: null,
              region: {
                lat: 37.5862,
                lng: 127.0295,
              },
              requesteingFriendIds: [],
              requestedFriendIds: [],
              acceptedFriendIds: ['1'],
              createAt: '2022-12-04T16:53:34.448Z',
              updateAt: '2022-12-04T16:59:13.000Z',
              deleteAt: null,
              authority: null,
            },
            comments: [],
          },
        },
      ],
    },
  })
  @Post('/getNearPosts')
  getNearPosts(@Req() req) {
    return this.scanningService.getNearPosts(req);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '근처 모든 유저 조회하기' })
  @ApiCreatedResponse({
    description: '모든 유저 거리순으로 반환',
    schema: {
      example: [
        {
          index: 1,
          distance: 300,
          post: {
            id: 3,
            name: 'user3',
            phone: 0,
            email: 'user3@amdin.com',
            password:
              '$2b$10$a.a/g6tBZIyucfvzLo77huTh2/V54mH5kneNwzZA9.0VrTzxPE1aO',
            nickname: '사거리',
            text: null,
            profileImg: null,
            isActive: true,
            region: {
              lat: 37.5864,
              lng: 127.0325,
            },
            requesteingFriendIds: [],
            requestedFriendIds: [],
            acceptedFriendIds: ['1'],
            createAt: '2022-12-04T16:59:52.521Z',
            updateAt: '2022-12-04T17:45:37.000Z',
            deleteAt: null,
            authority: null,
          },
        },
        {
          index: 0,
          distance: 400,
          post: {
            id: 1,
            name: 'user1',
            phone: 0,
            email: 'user1@amdin.com',
            password: '1111',
            nickname: '중앙광장',
            text: null,
            profileImg: null,
            isActive: true,
            region: {
              lat: 37.5884,
              lng: 127.0337,
            },
            requesteingFriendIds: [],
            requestedFriendIds: [],
            acceptedFriendIds: ['2', '3'],
            createAt: '2022-12-04T16:53:07.850Z',
            updateAt: '2022-12-04T17:46:33.000Z',
            deleteAt: null,
            authority: null,
          },
        },
      ],
    },
  })
  @Post('/getNearUsers')
  getNearUsers(@Req() req) {
    return this.scanningService.getNearUsers(req);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '근처 친구가 아닌 유저 조회하기' })
  @ApiCreatedResponse({
    description: '근처 친구가 아닌 유저 거리순으로 반환',
    schema: {
      example: [
        {
          index: 0,
          distance: 200,
          post: {
            id: 3,
            name: 'user3',
            phone: 0,
            email: 'user3@amdin.com',
            password:
              '$2b$10$a.a/g6tBZIyucfvzLo77huTh2/V54mH5kneNwzZA9.0VrTzxPE1aO',
            nickname: '사거리',
            text: null,
            profileImg: null,
            isActive: true,
            region: {
              lat: 37.5864,
              lng: 127.0325,
            },
            requesteingFriendIds: [],
            requestedFriendIds: [],
            acceptedFriendIds: ['1'],
            createAt: '2022-12-04T16:59:52.521Z',
            updateAt: '2022-12-04T17:45:37.000Z',
            deleteAt: null,
            authority: null,
          },
        },
      ],
    },
  })
  @Post('/getNearNonFriends')
  getNearNonFriends(@Req() req) {
    return this.scanningService.getNearNonFriends(req);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: '근처 친구인 유저 조회하기' })
  @ApiCreatedResponse({
    description: '근처 친구인 유저 거리순으로 반환',
    schema: {
      example: [
        {
          index: 0,
          distance: 0,
          post: {
            id: 1,
            name: 'user1',
            phone: 0,
            email: 'user1@amdin.com',
            password: '1111',
            nickname: '중앙광장',
            text: null,
            profileImg: null,
            isActive: true,
            region: {
              lat: 37.5884,
              lng: 127.0337,
            },
            requesteingFriendIds: [],
            requestedFriendIds: [],
            acceptedFriendIds: ['2', '3'],
            createAt: '2022-12-04T16:53:07.850Z',
            updateAt: '2022-12-04T17:46:33.000Z',
            deleteAt: null,
            authority: null,
          },
        },
      ],
    },
  })
  @Post('/getNearFriends')
  getNearFriends(@Req() req) {
    return this.scanningService.getNearFriends(req);
  }
}
