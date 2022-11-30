import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { GetNearFriendsDto } from './dto/getNearFriendsDto';
import { GetNearPostsDto } from './dto/getNearPostsDto';
export declare class ScanningService {
    private userRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, postRepository: Repository<Post>);
    calculateDistance(): Promise<void>;
    getNearPosts(getNearPostsDto: GetNearPostsDto): Promise<any>;
    getNearUsers(getNearFriendsDto: GetNearFriendsDto): Promise<any>;
}
