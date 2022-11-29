import { Authority } from 'src/auth/entity/authority.entity';
import { Friendship } from 'src/friendships/entity/friendship.entity';
import { Post } from 'src/posts/entity/post.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.author, { nullable: true })
  posts: Post[];

  @ManyToOne(() => Authority, (authority) => authority.id, { eager: true })
  authority: Authority;

  @OneToMany(() => Friendship, (friendship) => friendship.requestedFriends, {
    nullable: true,
    eager: true,
  })
  requestedFriendship: Post[];

  @OneToMany(() => Friendship, (friendship) => friendship.responsedFriends, {
    nullable: true,
    eager: true,
  })
  responsedFriendship: Post[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
