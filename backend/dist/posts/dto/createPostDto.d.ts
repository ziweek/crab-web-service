import { User } from 'src/users/entity/users.entity';
export declare class CreatePostDto {
    author: User;
    title: string;
    content: string;
    images: string;
    region: JSON;
    hidden: boolean;
}
