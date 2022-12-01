import { User } from 'src/users/entity/users.entity';
export declare class Friendship {
    id: number;
    requestedFriends: User[];
    acceptedFriends: User[];
    createAt: Date;
    updateAt: Date;
    deleteAt: Date | null;
}
