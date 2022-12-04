import { AcceptFriendshipDto } from './dto/acceptFriendshipDto';
import { CreateUserDto } from './dto/createUserDto';
import { RejectFriendshipDto } from './dto/rejectFriendshipDto';
import { RequestFriendshipDto } from './dto/requestFriendshipDto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAllUsers(): Promise<any[]>;
    findOneUser(req: any): Promise<import("./entity/users.entity").User>;
    updateUser(req: any, createUserDto: CreateUserDto): Promise<void>;
    deleteUser(req: any): void;
    requestFriendship(req: any, requestFriendshipDto: RequestFriendshipDto): Promise<any>;
    acceptFriendship(req: any, acceptFriendshipDto: AcceptFriendshipDto): Promise<any>;
    rejectFriendship(req: any, rejectFriendshipDto: RejectFriendshipDto): Promise<any>;
    deleteFriendship(req: any, rejectFriendshipDto: RejectFriendshipDto): Promise<any>;
}
