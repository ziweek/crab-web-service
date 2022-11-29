import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
export declare class Comment {
    id: number;
    content: string;
    region: string;
    hidden: boolean;
    author: User;
    post: Post;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date | null;
}
