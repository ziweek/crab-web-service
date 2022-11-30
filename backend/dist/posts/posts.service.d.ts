import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPostDto';
import { Post } from './entity/post.entity';
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    createPost(createPostDto: CreatePostDto): Promise<void>;
    findAllPosts(): Promise<Post[]>;
    findOnePost(id: number): Promise<Post>;
    deletePost(id: number): Promise<void>;
    updatePost(id: number, createPostDto: CreatePostDto): Promise<void>;
}
