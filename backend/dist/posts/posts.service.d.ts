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
    findOnePost(id: number): Promise<Post>;
    deletePost(id: number): Promise<void>;
    updatePost(id: number, createPostDto: CreatePostDto): Promise<void>;
}
