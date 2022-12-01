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
import { Friendship } from 'src/friendships/entity/friendship.entity';
import { FriendshipsService } from 'src/friendships/friendships.service';
import { CreateFriendshipDto } from 'src/friendships/dto/createFriendshipDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Friendship)
    private friendshipRepository: Repository<Friendship>,

    private readonly friendshipsService: FriendshipsService,
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
    const emptyCreateFriendshipDto = new CreateFriendshipDto();
    emptyCreateFriendshipDto.requestedFriends = [];
    emptyCreateFriendshipDto.acceptedFriends = [];
    const createdFriendship = await this.friendshipsService.createOneFriendship(
      emptyCreateFriendshipDto,
    );
    await this.userRepository.save(registerAccountDtoHashed);

    const savedUser = await this.userRepository.findOne({
      where: { email: registerAccountDto.email },
    });
    const savedFriendship = await this.friendshipRepository.findOne({
      where: { id: createdFriendship.id },
    });
    savedUser.friendship = savedFriendship;
    savedFriendship.user = savedUser;
    await this.userRepository.save(savedUser);
    await this.userRepository.save(savedFriendship);

    const payload: Payload = { email: registerAccountDto.email };
    return {
      accessToken: this.jwtService.sign(payload),
      // finalAccount: finalAccount,
    };
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
