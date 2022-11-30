import { Authority } from 'src/auth/entity/authority.entity';
import { Post } from 'src/posts/entity/post.entity';
export declare class User {
    id: number;
    name: string;
    nickname: string;
    text: string;
    profileImg: string;
    phone: number;
    email: string;
    region: JSON;
    password: string;
    friendIds: number[];
    posts: Post[];
    authority: Authority;
    requestedFriendship: Post[];
    responsedFriendship: Post[];
    createAt: Date;
    updateAt: Date;
    deleteAt: Date | null;
}
