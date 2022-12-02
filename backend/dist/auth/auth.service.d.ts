import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { RegisterAccountDto } from './dto/registerAccountDto';
import { ValidateAccountDto } from './dto/validateAccountDto';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './security/payload.interface';
import { Friendship } from 'src/friendships/entity/friendship.entity';
import { FriendshipsService } from 'src/friendships/friendships.service';
export declare class AuthService {
    private userRepository;
    private friendshipRepository;
    private readonly friendshipsService;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, friendshipRepository: Repository<Friendship>, friendshipsService: FriendshipsService, jwtService: JwtService);
    transformPassword(registerAccountDto: RegisterAccountDto): Promise<RegisterAccountDto>;
    registerNewAccount(registerAccountDto: RegisterAccountDto): Promise<any>;
    validateAccount(validateAccountDto: ValidateAccountDto): Promise<any>;
    tokenValidateUser(payload: Payload): Promise<User>;
}
