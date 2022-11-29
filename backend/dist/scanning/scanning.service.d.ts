import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
export declare class ScanningService {
    private userRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, postRepository: Repository<Post>);
    getNearPosts(region: string): Promise<any>;
}
