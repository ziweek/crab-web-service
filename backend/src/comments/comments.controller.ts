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
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/createCommentDto';

@Controller('comments')
@ApiTags('Comment API')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get('/all')
  @ApiOperation({ summary: '전체 댓글 조회하기' })
  @ApiCreatedResponse({
    description: '전체 댓글 반환',
    schema: {
      // example:
    },
  })
  findAllComments() {
    return this.commentsService.findAllComments();
  }

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: '댓글 조회하기' })
  @ApiCreatedResponse({
    description: '포스트의 댓글 반환',
    schema: {
      // example:
    },
  })
  findComments(@Req() req) {
    const postId = req.body.postId;
    return this.commentsService.findComments(postId);
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: '댓글 작성하기' })
  @ApiCreatedResponse({
    description: '댓글 작성하기',
    schema: {
      // example:
    },
  })
  createComment(@Req() req) {
    const createCommentDto = req.body;
    createCommentDto.commenter = req.user;
    return this.commentsService.createComment(createCommentDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: '댓글 수정하기' })
  @ApiCreatedResponse({
    description: '댓글 수정하기',
    schema: {
      // example:
    },
  })
  updateComment(@Req() req) {
    const commentId = req.params.id;
    const commenterId = req.user.id;
    const createCommentDto = req.body;
    return this.commentsService.updateComment(
      commentId,
      commenterId,
      createCommentDto,
    );
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: '댓글 삭제하기' })
  @ApiCreatedResponse({
    description: '댓글 삭제하기',
    schema: {
      example: {
        result: true,
      },
    },
  })
  deleteComment(@Req() req) {
    const commentId = req.params.id;
    const commenterId = req.user.id;
    return this.commentsService.deleteComment(commentId, commenterId);
  }
}
