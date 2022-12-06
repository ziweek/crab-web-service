import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entity/users.entity';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/entity/post.entity';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/entity/comment.entity';
import { Authority } from './auth/entity/authority.entity';
import { ScanningModule } from './scanning/scanning.module';
import { EventsModule } from './events/events.module';
import { MlModule } from './ml/ml.module';
import { HttpModule } from '@nestjs/axios';
import { UploaderModule } from './uploader/uploader.module';
import { CrabsModule } from './crabs/crabs.module';
import { ProfileImageFile } from './uploader/entity/profileImage.entity';
import { PostImageFile } from './uploader/entity/postImage.entity';
import { CrabImageFile } from './uploader/entity/crabImage.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `${__dirname}/.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,

      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        User,
        Post,
        Comment,
        Authority,
        ProfileImageFile,
        PostImageFile,
        CrabImageFile,
      ],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    CommentsModule,
    ScanningModule,
    EventsModule,
    MlModule,
    HttpModule,
    UploaderModule,
    CrabsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
