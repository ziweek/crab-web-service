import { GetNearFriendsDto } from './dto/getNearFriendsDto';
import { GetNearPostsDto } from './dto/getNearPostsDto';
import { ScanningService } from './scanning.service';
export declare class ScanningController {
    private scanningService;
    constructor(scanningService: ScanningService);
    getNearPosts(getNearPostsDto: GetNearPostsDto): Promise<any>;
    getNearFriends(getNearFriends: GetNearFriendsDto): Promise<any>;
}
