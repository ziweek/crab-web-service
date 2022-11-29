import { Comment } from 'src/comments/entity/comment.entity';
import { User } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  // @Column()
  // latitude: string;

  // @Column()
  // longitude: string;

  @Column()
  images: string;

  @Column()
  region: string;

  @Column()
  hidden: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
    onDelete: 'SET NULL',
  })
  friends: User;

  @OneToMany(() => Comment, (comment) => comment.id, {
    eager: true,
    onDelete: 'SET NULL',
  })
  comments: Comment[];
}
