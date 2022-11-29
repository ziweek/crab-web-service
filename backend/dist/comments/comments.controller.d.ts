import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/createCommentDto';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    findAllComments(): Promise<any[]>;
    findOneComment(param: any): Promise<any[]>;
    createComment(createCommentDto: CreateCommentDto): Promise<void>;
    updateComment(param: any): Promise<any[]>;
    deleteComment(param: any): Promise<any[]>;
}
