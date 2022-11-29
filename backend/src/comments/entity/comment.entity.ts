import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  region: string;

  @Column()
  hidden: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  @ManyToOne(() => Post, (post) => post.id, {
    onDelete: 'SET NULL',
  })
  post: Post;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
