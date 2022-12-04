import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { Authority } from './entity/authority.entity';
import { JwtStrategy } from './security/passport.interface';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
