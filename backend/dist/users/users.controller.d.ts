import { CreateUserDto } from './dto/createUserDto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAllUsers(): Promise<any[]>;
    findOneUser(param: any): Promise<import("./entity/users.entity").User>;
    createUser(createUserDto: CreateUserDto): Promise<import("./entity/users.entity").User>;
    updateUser(param: any, createUserDto: CreateUserDto): Promise<void>;
    deleteUser(param: any): void;
}
