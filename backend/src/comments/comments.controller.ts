import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/createCommentDto';

@Controller('comments')
@ApiTags('Comment API')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  @ApiOperation({ summary: '전체 댓글 조회하기' })
  @ApiCreatedResponse({
    description: '전체 댓글 반환',
    schema: {
      // example:
    },
  })
  async findAllComments(): Promise<any[]> {
    // return ['findAllUsers'];
    return this.commentsService.findAllComments();
  }

  @Get(':id')
  @ApiOperation({ summary: '댓글 하나 조회하기' })
  @ApiCreatedResponse({
    description: '댓글 하나 반환',
    schema: {
      // example:
    },
  })
  async findOneComment(@Param() param): Promise<any[]> {
    return ['findOneComment', `${param.id}`];
  }

  @Post()
  @ApiOperation({ summary: '댓글 작성하기' })
  @ApiCreatedResponse({
    description: '댓글 작성하기',
    schema: {
      // example:
    },
  })
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    // return ['createUser', `${createUserDto}`];
    this.commentsService.createComment(createCommentDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: '댓글 수정하기' })
  @ApiCreatedResponse({
    description: '댓글 수정하기',
    schema: {
      // example:
    },
  })
  async updateComment(@Param() param): Promise<any[]> {
    return ['updateUser', `${param.id}`];
  }

  @Delete(':id')
  @ApiOperation({ summary: '댓글 삭제하기' })
  @ApiCreatedResponse({
    description: '댓글 삭제하기',
    schema: {
      // example:
    },
  })
  async deleteComment(@Param() param): Promise<any[]> {
    return ['deleteUser', `${param.id}`];
  }
}
