import { CreatePostDto } from './dto/createPostDto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    findAllPosts(): Promise<import("./entity/post.entity").Post[]>;
    findOnePost(param: any): Promise<import("./entity/post.entity").Post>;
    createPost(createPostDto: CreatePostDto): Promise<import("./entity/post.entity").Post>;
    updatePost(param: any, createPostDto: CreatePostDto): void;
    deletePost(param: any): string[];
}
