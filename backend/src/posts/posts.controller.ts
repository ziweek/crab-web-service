import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/createPostDto';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('Post API')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAllPosts() {
    return this.postsService.findAllPosts();
  }

  @Get(':id')
  findOnePost(@Param() param) {
    return this.postsService.findOnePost(param.id);
    // return ['findOneUser', `${param.id}`];
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    // return ['createUser', `${createUserDto}`];
    this.postsService.createPost(createPostDto);
  }

  @Patch(':id')
  updatePost(@Param() param, @Body() createPostDto: CreatePostDto) {
    // return ['updatePost', `${param.id}`];
    this.postsService.updatePost(param.id, createPostDto);
  }

  @Delete(':id')
  deletePost(@Param() param) {
    this.postsService.deletePost(param.id);
    // return ['deletePost', `${param.id}`];
  }
}
