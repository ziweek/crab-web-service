import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPostDto';
import { Post } from './entity/post.entity';
export declare class PostsService {
    private postsRepository;
    private usersRepository;
    constructor(postsRepository: Repository<Post>, usersRepository: Repository<User>);
    createPost(createPostDto: CreatePostDto): Promise<Post>;
    findAllPosts(): Promise<Post[]>;
    findPosts(user: User): Promise<any>;
    updatePost(postId: number, userId: number, createPostDto: CreatePostDto): Promise<any>;
    deletePost(postId: number, userId: number): Promise<any>;
}
