import { Friendship } from 'src/friendships/entity/friendship.entity';
import { FriendshipsService } from 'src/friendships/friendships.service';
import { Repository } from 'typeorm';
import { AddFriendDto } from './dto/addFriendDto';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/users.entity';
export declare class UsersService {
    private friendshipsService;
    private usersRepository;
    private friendshipsRepository;
    constructor(friendshipsService: FriendshipsService, usersRepository: Repository<User>, friendshipsRepository: Repository<Friendship>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findOneUser(id: number): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, createUserDto: CreateUserDto): Promise<void>;
    requestFriendship(id: number, addFriendDto: AddFriendDto): Promise<any>;
}
