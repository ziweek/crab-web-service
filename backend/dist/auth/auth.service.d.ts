import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { RegisterAccountDto } from './dto/registerAccountDto';
import { ValidateAccountDto } from './dto/validateAccountDto';
import { Authority } from './entity/authority.entity';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './security/payload.interface';
export declare class AuthService {
    private userRepository;
    private authorityRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, authorityRepository: Repository<Authority>, jwtService: JwtService);
    transformPassword(registerAccountDto: RegisterAccountDto): Promise<RegisterAccountDto>;
    registerNewAccount(registerAccountDto: RegisterAccountDto): Promise<any>;
    validateAccount(validateAccountDto: ValidateAccountDto): Promise<any>;
    tokenValidateUser(payload: Payload): Promise<User>;
}
