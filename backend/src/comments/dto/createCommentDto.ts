import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';

export class CreateCommentDto {
  content: string;
  region: JSON;

  commenter: User;
  post: Post;
}
