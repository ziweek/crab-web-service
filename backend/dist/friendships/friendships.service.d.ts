import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { CreateFriendshipDto } from './dto/createFriendshipDto';
import { Friendship } from './entity/friendship.entity';
export declare class FriendshipsService {
    private friendshipsRepository;
    private usersRepository;
    constructor(friendshipsRepository: Repository<Friendship>, usersRepository: Repository<User>);
    findAllFriendship(): Promise<Friendship[]>;
    findOneFriendship(id: number): Promise<Friendship>;
    createOneFriendship(createFriendshipDto: CreateFriendshipDto): Promise<Friendship>;
}
