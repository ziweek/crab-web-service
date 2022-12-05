import { CommentsService } from './comments.service';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    findAllComments(): Promise<import("./entity/comment.entity").Comment[]>;
    findComments(req: any): Promise<import("./entity/comment.entity").Comment[]>;
    createComment(req: any): Promise<import("./entity/comment.entity").Comment>;
    updateComment(req: any): Promise<any>;
    deleteComment(req: any): Promise<any>;
}
