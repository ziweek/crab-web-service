import { Authority } from 'src/auth/entity/authority.entity';
import { Friendship } from 'src/friendships/entity/friendship.entity';
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
    friendship: Friendship;
    requestedFriendship: Friendship;
    acceptedFriendship: Friendship;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date | null;
}
