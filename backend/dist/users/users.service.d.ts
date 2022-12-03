import { Repository } from 'typeorm';
import { AcceptFriendshipDto } from './dto/acceptFriendshipDto';
import { CreateUserDto } from './dto/createUserDto';
import { DeleteFriendshipDto } from './dto/deleteFriendshipDto';
import { RejectFriendshipDto } from './dto/rejectFriendshipDto';
import { RequestFriendshipDto } from './dto/requestFriendshipDto';
import { User } from './entity/users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findOneUser(id: number): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, createUserDto: CreateUserDto): Promise<void>;
    requestFriendship(id: number, requestFriendshipDto: RequestFriendshipDto): Promise<any>;
    acceptFriendship(id: number, acceptFriendshipDto: AcceptFriendshipDto): Promise<any>;
    rejectFriendship(id: number, rejectFriendshipDto: RejectFriendshipDto): Promise<any>;
    deleteFriendship(id: number, deleteFriendshipDto: DeleteFriendshipDto): Promise<any>;
}
