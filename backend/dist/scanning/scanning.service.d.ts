import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
export declare class ScanningService {
    private userRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, postRepository: Repository<Post>);
    getDistance: (region1: any, region2: any) => number;
    getNearPosts(req: any): Promise<any>;
    getNearUsers(req: any): Promise<any>;
    getNearNonFriends(req: any): Promise<any>;
    getNearFriends(req: any): Promise<any>;
}
