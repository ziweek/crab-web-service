import { AcceptFriendshipDto } from './dto/acceptFriendshipDto';
import { CreateUserDto } from './dto/createUserDto';
import { RejectFriendshipDto } from './dto/rejectFriendshipDto';
import { RequestFriendshipDto } from './dto/requestFriendshipDto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAllUsers(): Promise<any[]>;
    findOneUser(param: any): Promise<import("./entity/users.entity").User>;
    createUser(createUserDto: CreateUserDto): Promise<import("./entity/users.entity").User>;
    updateUser(param: any, createUserDto: CreateUserDto): Promise<void>;
    deleteUser(param: any): void;
    requestFriendship(param: any, requestFriendshipDto: RequestFriendshipDto): Promise<any>;
    acceptFriendship(param: any, acceptFriendshipDto: AcceptFriendshipDto): Promise<any>;
    rejectFriendship(param: any, rejectFriendshipDto: RejectFriendshipDto): Promise<any>;
    deleteFriendship(param: any, rejectFriendshipDto: RejectFriendshipDto): Promise<any>;
}
