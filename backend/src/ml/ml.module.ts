import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { MlController } from './ml.controller';
import { MlService } from './ml.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post]), HttpModule],
  exports: [TypeOrmModule],
  controllers: [MlController],
  providers: [MlService],
})
export class MlModule {}
