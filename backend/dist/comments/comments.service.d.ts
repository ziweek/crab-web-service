import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/createCommentDto';
import { Comment } from './entity/comment.entity';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: Repository<Comment>);
    createComment(createCommentDto: CreateCommentDto): Promise<void>;
    findAllComments(): Promise<Comment[]>;
    findOneComment(id: number): Promise<Comment>;
    deleteComment(id: number): Promise<void>;
    updateComment(id: number, createCommentDto: CreateCommentDto): Promise<void>;
}
