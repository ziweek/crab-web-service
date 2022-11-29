import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<void>;
    findAllUsers(): Promise<User[]>;
    findOneUser(id: number): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, createUserDto: CreateUserDto): Promise<void>;
}
