import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { Friendship } from './entity/friendship.entity';
import { FriendshipsController } from './friendships.controller';
import { FriendshipsService } from './friendships.service';

@Module({
  imports: [TypeOrmModule.forFeature([Friendship, User])],
  exports: [TypeOrmModule],
  controllers: [FriendshipsController],
  providers: [FriendshipsService],
})
export class FriendshipsModule {}
