import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { ScanningController } from './scanning.controller';
import { ScanningService } from './scanning.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  exports: [TypeOrmModule],
  controllers: [ScanningController],
  providers: [ScanningService],
})
export class ScanningModule {}
