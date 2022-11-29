import { Comment } from 'src/comments/entity/comment.entity';
import { User } from 'src/users/entity/users.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    images: string;
    region: string;
    hidden: boolean;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date | null;
    author: User;
    comments: Comment[];
}
