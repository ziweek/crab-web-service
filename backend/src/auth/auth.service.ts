import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { RegisterAccountDto } from './dto/registerAccountDto';
import { ValidateAccountDto } from './dto/validateAccountDto';
import { Authority } from './entity/authority.entity';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './security/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(User)
    private authorityRepository: Repository<Authority>,

    private readonly jwtService: JwtService,
  ) {}

  async transformPassword(
    registerAccountDto: RegisterAccountDto,
  ): Promise<RegisterAccountDto> {
    registerAccountDto.password = await bcrypt.hash(
      registerAccountDto.password,
      10,
    );
    return registerAccountDto;
  }

  async registerNewAccount(
    registerAccountDto: RegisterAccountDto,
  ): Promise<any> {
    const existedUser = await this.userRepository.findOne({
      where: { email: registerAccountDto.email },
    });
    if (existedUser) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    const registerAccountDtoHashed = await this.transformPassword(
      registerAccountDto,
    );
    const newAccount = await this.userRepository.save(registerAccountDtoHashed);
    return newAccount;
  }

  async validateAccount(validateAccountDto: ValidateAccountDto): Promise<any> {
    const existedUser = await this.userRepository.findOne({
      where: { email: validateAccountDto.email },
    });
    const validatePassword = await bcrypt.compare(
      validateAccountDto.password,
      existedUser.password,
    );
    if (!existedUser || !validatePassword) {
      throw new UnauthorizedException();
    }

    const payload: Payload = { email: validateAccountDto.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async tokenValidateUser(payload: Payload): Promise<User> {
    return await this.userRepository.findOne({
      where: { email: payload.email },
    });
  }
}
