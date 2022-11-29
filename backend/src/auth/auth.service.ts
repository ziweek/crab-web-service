import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EncodePasswordDto } from './dto/encode.password.dto';

@Injectable()
export class AuthService {
  async transformPassword(encodePasswordDto: EncodePasswordDto): Promise<void> {
    encodePasswordDto.password = await bcrypt.hash(
      encodePasswordDto.password,
      10,
    );
    return Promise.resolve();
  }
}
