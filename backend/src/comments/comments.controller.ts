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
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/createCommentDto';

@Controller('comments')
@ApiTags('Comment API')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  async findAllComments(): Promise<any[]> {
    // return ['findAllUsers'];
    return this.commentsService.findAllComments();
  }

  @Get(':id')
  async findOneComment(@Param() param): Promise<any[]> {
    return ['findOneComment', `${param.id}`];
  }

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    // return ['createUser', `${createUserDto}`];
    this.commentsService.createComment(createCommentDto);
  }

  @Patch(':id')
  async updateComment(@Param() param): Promise<any[]> {
    return ['updateUser', `${param.id}`];
  }

  @Delete(':id')
  async deleteComment(@Param() param): Promise<any[]> {
    return ['deleteUser', `${param.id}`];
  }
}
