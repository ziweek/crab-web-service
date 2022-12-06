import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { PostImageFile } from './entity/postImage.entity';
import { ProfileImageFile } from './entity/profileImage.entity';
import { CrabImageFile } from './entity/crabImage.entity';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfileImageFile,
      PostImageFile,
      CrabImageFile,
      User,
      Post,
    ]),
  ],
  exports: [TypeOrmModule],
  controllers: [UploaderController],
  providers: [UploaderService],
})
export class UploaderModule {}
