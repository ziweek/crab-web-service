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
  async findAllUPosts(): Promise<any[]> {
    // return ['findAllUsers'];
    return this.postsService.findAllPosts();
  }

  @Get(':id')
  async findOnePost(@Param() param): Promise<any[]> {
    return ['findOneUser', `${param.id}`];
  }

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    // return ['createUser', `${createUserDto}`];
    this.postsService.createPost(createPostDto);
  }

  @Patch(':id')
  async updatePost(@Param() param): Promise<any[]> {
    return ['updatePost', `${param.id}`];
  }

  @Delete(':id')
  async deletePost(@Param() param): Promise<any[]> {
    return ['deletePost', `${param.id}`];
  }
}
