import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponseProperty,
  ApiTags,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterAccountDto } from './dto/registerAccountDto';
import { ValidateAccountDto } from './dto/validateAccountDto';
import { AuthGuard } from './security/auth.guard';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @ApiOperation({ summary: '회원가입' })
  @ApiCreatedResponse({
    description: '유저 정보',
    schema: {
      example: {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q0QGFtZGluLmNvbSIsImlhdCI6MTY2OTkwNjgzOSwiZXhwIjoxNjY5OTA3MTM5fQ.U9PmQeeBRvRfCwgLqD_BrYVwKRFkrQH6r3gKd2Mefwk',
      },
    },
  })
  registerAccount(
    @Req() req: Request,
    @Body() registerAccountDto: RegisterAccountDto,
  ) {
    return this.authService.registerNewAccount(registerAccountDto);
    // const validateAccount = new ValidateAccountDto();
    // validateAccount.email = registerAccountDto.email;
    // console.log(validateAccount.email);
    // validateAccount.password = registerAccountDto.password;
    // console.log(validateAccount.password);
    // return this.authService.validateAccount(validateAccount);
  }

  @Post('/login')
  @ApiOperation({ summary: '로그인' })
  @ApiCreatedResponse({
    description: '접근 토큰 발급',
    schema: {
      example: {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAYW1kaW4uY29tIiwiaWF0IjoxNjY5Nzg3NjgxLCJleHAiOjE2Njk3ODc5ODF9.c0kAMeXpkjs0cSfIVNojOL47bdkdiWp8anZk6tlHYwU',
      },
    },
  })
  async login(
    @Body() validateAccountDto: ValidateAccountDto,
    @Res() res: Response,
  ): Promise<any> {
    const jwt = await this.authService.validateAccount(validateAccountDto);
    res.setHeader('Authorization', 'Bearer ' + jwt.accessToken);
    return res.json(jwt);
  }

  @Get('/authenticate')
  @ApiOperation({ summary: '인증' })
  @ApiCreatedResponse({
    description: '로그인 인증',
    schema: {
      example: {
        id: 1,
        name: 'test',
        nickname: null,
        text: null,
        profileImg: null,
        phone: 1012345678,
        email: 'test@amdin.com',
        region: null,
        password:
          '$2b$10$AqVvjdFb8nI2TxmRpLqEBOOczztK5UABnb7..bkOa0N.HeBGHdIzO',
        createAt: '2022-11-30T05:54:13.099Z',
        updateAt: '2022-11-30T05:54:13.099Z',
        deleteAt: null,
        authority: null,
        requestedFriendship: [],
        responsedFriendship: [],
      },
    },
  })
  @UseGuards(AuthGuard)
  isAuthenticated(@Req() req: Request): any {
    const user: any = req.user;
    return user;
  }
}
