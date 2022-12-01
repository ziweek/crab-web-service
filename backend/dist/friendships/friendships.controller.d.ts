import { CreateFriendshipDto } from './dto/createFriendshipDto';
import { FriendshipsService } from './friendships.service';
export declare class FriendshipsController {
    private friendshipsService;
    constructor(friendshipsService: FriendshipsService);
    findAllFriendship(): Promise<any[]>;
    findOneFriendship(param: any): Promise<import("./entity/friendship.entity").Friendship>;
    createOneFriendship(createFriendshipDto: CreateFriendshipDto): Promise<void>;
}
