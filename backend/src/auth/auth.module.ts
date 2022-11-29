import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { Authority } from './entity/authority.entity';
import { JwtStrategy } from './security/passport.interface';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Authority]),
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
  ],
  exports: [TypeOrmModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
