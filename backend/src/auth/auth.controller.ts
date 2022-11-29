import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterAccountDto } from './dto/registerAccountDto';
import { ValidateAccountDto } from './dto/validateAccountDto';
import { AuthGuard } from './security/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  registerAccount(
    @Req() req: Request,
    @Body() registerAccountDto: RegisterAccountDto,
  ): Promise<void> {
    return this.authService.registerNewAccount(registerAccountDto);
  }

  @Post('/login')
  async login(
    @Body() validateAccountDto: ValidateAccountDto,
    @Res() res: Response,
  ): Promise<any> {
    const jwt = await this.authService.validateAccount(validateAccountDto);
    res.setHeader('Authorization', 'Bearer ' + jwt.accessToken);
    return res.json(jwt);
  }

  @Get('/authenticate')
  @UseGuards(AuthGuard)
  isAuthenticated(@Req() req: Request): any {
    const user: any = req.user;
    return user;
  }
}
