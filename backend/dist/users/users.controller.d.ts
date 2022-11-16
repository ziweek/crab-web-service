import { CreateUserDto } from './createUserDto';
export declare class UsersController {
    findAllUsers(): Promise<any[]>;
    findOneUser(param: any): Promise<any[]>;
    createUser(createUserDto: CreateUserDto): Promise<any[]>;
    updateUser(param: any): Promise<any[]>;
    deleteUser(param: any): Promise<any[]>;
}
