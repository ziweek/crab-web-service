import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/comments/entity/comment.entity';
import { CrabImageFile } from 'src/uploader/entity/crabImage.entity';
import { User } from 'src/users/entity/users.entity';
import { CrabsController } from './crabs.controller';
import { CrabsService } from './crabs.service';
import { Crab } from './entity/crab.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Comment, Crab, CrabImageFile])],
  exports: [TypeOrmModule],
  controllers: [CrabsController],
  providers: [CrabsService],
})
export class CrabsModule {}
