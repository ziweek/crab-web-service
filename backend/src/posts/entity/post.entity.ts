import { Comment } from 'src/comments/entity/comment.entity';
import { User } from 'src/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  images: string;

  @Column()
  region: string;

  @Column()
  hidden: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;

  @OneToOne(() => User, { nullable: true, eager: true })
  @JoinColumn()
  author: User;

  @OneToMany(() => Comment, (comment) => comment.post, {
    eager: true,
    onDelete: 'SET NULL',
  })
  comments: Comment[];
}
