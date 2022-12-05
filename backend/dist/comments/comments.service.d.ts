import { Post } from 'src/posts/entity/post.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/createCommentDto';
import { Comment } from './entity/comment.entity';
export declare class CommentsService {
    private commentsRepository;
    private postsRepository;
    constructor(commentsRepository: Repository<Comment>, postsRepository: Repository<Post>);
    createComment(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAllComments(): Promise<Comment[]>;
    findComments(postId: number): Promise<Comment[]>;
    deleteComment(commentId: number, commenterId: number): Promise<any>;
    updateComment(commentId: number, commenterId: number, createCommentDto: CreateCommentDto): Promise<any>;
}
