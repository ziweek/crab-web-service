import { CreatePostDto } from './dto/createPostDto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    findAllPosts(): Promise<import("./entity/post.entity").Post[]>;
    findPosts(req: any): Promise<any>;
    createPost(req: any, createPostDto: CreatePostDto): Promise<import("./entity/post.entity").Post>;
    updatePost(req: any): Promise<any>;
    deletePost(req: any): Promise<any>;
}
