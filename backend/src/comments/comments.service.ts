import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/createCommentDto';
import { Comment } from './entity/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async createComment(createCommentDto: CreateCommentDto): Promise<void> {
    // OneToOne - User
    // ManyToOne - Post
    this.commentsRepository.save(createCommentDto);
  }

  async findAllComments(): Promise<Comment[]> {
    return await this.commentsRepository.find();
  }

  async findOneComment(id: number): Promise<Comment> {
    return await this.commentsRepository.findOne({ where: { id: id } });
  }

  async deleteComment(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }

  async updateComment(
    id: number,
    createCommentDto: CreateCommentDto,
  ): Promise<void> {
    await this.commentsRepository.update(id, {
      content: createCommentDto.content,
      region: createCommentDto.region,
      hidden: createCommentDto.hidden,
    });
  }
}
