import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/post.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/createCommentDto';
import { Comment } from './entity/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,

    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentsRepository.save(createCommentDto);
  }

  async findAllComments(): Promise<Comment[]> {
    return await this.commentsRepository.find();
  }

  async findComments(postId: number): Promise<Comment[]> {
    const existedPost = await this.postsRepository.findOne({
      where: { id: postId },
    });
    if (existedPost) {
      return existedPost.comments;
    } else {
      throw new Error('포스트가 존재하지 않았습니다.');
    }
  }

  async deleteComment(commentId: number, commenterId: number): Promise<any> {
    const existedComment = await this.commentsRepository.findOne({
      where: { id: commentId, commenter: { id: commenterId } },
    });
    if (existedComment) {
      await this.commentsRepository.delete(commentId);
      return { result: true };
    } else {
      throw new Error('댓글이 존재하지 않았습니다.');
      return { result: false };
    }
  }

  async updateComment(
    commentId: number,
    commenterId: number,
    createCommentDto: CreateCommentDto,
  ): Promise<any> {
    const existedComment = await this.commentsRepository.findOne({
      where: { id: commentId, commenter: { id: commenterId } },
    });
    if (existedComment) {
      await this.commentsRepository.update(commentId, {
        content: createCommentDto.content,
        region: createCommentDto.region,
      });
      return await this.commentsRepository.findOne({
        where: { id: commentId },
      });
    } else {
      throw new Error('댓글이 존재하지 않았습니다.');
      return { result: false };
    }
  }
}
