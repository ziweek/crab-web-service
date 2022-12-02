import { Friendship } from 'src/friendships/entity/friendship.entity';
export declare class RegisterAccountDto {
    id: number;
    name: string;
    phone: number;
    email: string;
    password: string;
    friends: number[];
    friendship: Friendship;
}
