import { Authority } from 'src/auth/entity/authority.entity';
import { Post } from 'src/posts/entity/post.entity';
export declare class User {
    id: number;
    name: string;
    phone: number;
    email: string;
    password: string;
    nickname: string;
    text: string;
    profileImg: string;
    region: JSON;
    posts: Post[];
    authority: Authority;
    requesteingFriendIds: number[];
    requestedFriendIds: number[];
    acceptedFriendIds: number[];
    createAt: Date;
    updateAt: Date;
    deleteAt: Date | null;
}
