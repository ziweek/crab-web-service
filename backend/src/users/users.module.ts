import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { Post } from 'src/posts/entity/post.entity';
import { Comment } from 'src/comments/entity/comment.entity';
import { FriendshipsModule } from 'src/friendships/friendships.module';
import { FriendshipsService } from 'src/friendships/friendships.service';
import { Friendship } from 'src/friendships/entity/friendship.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Post, Comment, Friendship]),
    FriendshipsModule,
  ],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService, FriendshipsService],
})
export class UsersModule {}
