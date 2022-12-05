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
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { CreatePostDto } from './dto/createPostDto';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('Post API')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/all')
  @ApiOperation({ summary: '전체 포스트 조회하기' })
  @ApiCreatedResponse({
    description: '전체 포스트 반환',
    schema: {
      example: [
        {
          id: 3,
          title: 'test',
          content: '01012345678',
          images: 'admin@amdin.co,kr',
          region: {
            lat: 37.5885098,
            lng: 127.0337661,
          },
          hidden: true,
          createAt: '2022-12-01T05:20:17.442Z',
          updateAt: '2022-12-01T05:20:17.442Z',
          deleteAt: null,
          author: null,
          comments: [],
        },
        {
          id: 4,
          title: 'test',
          content: '01012345678',
          images: 'admin@amdin.co,kr',
          region: {
            lat: 37.5885098,
            lng: 127.0337661,
          },
          hidden: true,
          createAt: '2022-12-01T05:22:35.520Z',
          updateAt: '2022-12-01T05:22:35.520Z',
          deleteAt: null,
          author: null,
          comments: [],
        },
      ],
    },
  })
  findAllPosts() {
    return this.postsService.findAllPosts();
  }

  @UseGuards(AuthGuard)
  @Get()
  @ApiParam({ name: 'id', example: 1, required: true })
  @ApiOperation({ summary: '포스트 조회하기' })
  @ApiCreatedResponse({
    description: '포스트 하나 반환',
    schema: {
      example: {
        id: 4,
        title: 'test',
        content: '01012345678',
        images: 'admin@amdin.co,kr',
        region: {
          lat: 37.5885098,
          lng: 127.0337661,
        },
        hidden: true,
        createAt: '2022-12-01T05:22:35.520Z',
        updateAt: '2022-12-01T05:22:35.520Z',
        deleteAt: null,
        author: null,
        comments: [],
      },
    },
  })
  findPosts(@Req() req) {
    return this.postsService.findPosts(req.user);
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: '포스트 생성하기' })
  @ApiCreatedResponse({
    description: '포스트 생성',
    schema: {
      // example:
    },
  })
  createPost(@Req() req, @Body() createPostDto: CreatePostDto) {
    createPostDto.author = req.user;
    return this.postsService.createPost(createPostDto);
  }

  @UseGuards(AuthGuard)
  @Patch('/:id')
  @ApiOperation({ summary: '포스트 수정하기' })
  @ApiCreatedResponse({
    description: '포스트 수정',
    schema: {
      example: {
        id: 4,
        title: 'test',
        content: '01012345678',
        images: 'admin@amdin.co,kr',
        region: {
          lat: 37.5885098,
          lng: 127.0337661,
        },
        hidden: true,
        createAt: '2022-12-01T05:22:35.520Z',
        updateAt: '2022-12-01T05:22:35.520Z',
        deleteAt: null,
        author: null,
        comments: [],
      },
    },
  })
  updatePost(@Req() req) {
    const postId = req.params.id;
    const userId = req.user.id;
    const createPostDto = req.body;
    createPostDto.author = req.user;
    return this.postsService.updatePost(postId, userId, createPostDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  @ApiOperation({ summary: '포스트 삭제하기' })
  @ApiCreatedResponse({
    description: '포스트 삭제',
    schema: {
      example: ['deletePost', '3'],
    },
  })
  deletePost(@Req() req) {
    const postId = req.params.id;
    const userId = req.user.id;
    return this.postsService.deletePost(postId, userId);
  }
}
