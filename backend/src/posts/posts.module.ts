import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/comments/entity/comment.entity';
import { User } from 'src/users/entity/users.entity';
import { Post } from './entity/post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post, Comment])],
  exports: [TypeOrmModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
