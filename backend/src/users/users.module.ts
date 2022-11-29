import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { Post } from 'src/posts/entity/post.entity';
import { Comment } from 'src/comments/entity/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post, Comment])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
