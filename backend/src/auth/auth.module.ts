import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { Authority } from './entity/authority.entity';
import { JwtStrategy } from './security/passport.interface';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { FriendshipsModule } from 'src/friendships/friendships.module';
import { FriendshipsService } from 'src/friendships/friendships.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { Friendship } from 'src/friendships/entity/friendship.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Authority, Friendship]),
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
    UsersModule,
    FriendshipsModule,
  ],
  exports: [TypeOrmModule],
  providers: [AuthService, JwtStrategy, UsersService, FriendshipsService],
  controllers: [AuthController],
})
export class AuthModule {}
