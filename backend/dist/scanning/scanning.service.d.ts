import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { GetNearPostsDto } from './dto/getNearPostsDto';
export declare class ScanningService {
    private userRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, postRepository: Repository<Post>);
    calculateDistance(): Promise<void>;
    getNearPosts(getNearPostsDto: GetNearPostsDto): Promise<any>;
}
