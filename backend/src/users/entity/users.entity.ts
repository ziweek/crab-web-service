import { ApiProperty } from '@nestjs/swagger';
import { Authority } from 'src/auth/entity/authority.entity';
import { Comment } from 'src/comments/entity/comment.entity';
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
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({
    example: '김지욱',
    description: '이름',
    required: true,
  })
  name: string;

  @Column()
  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: true,
  })
  phone: number;

  @Column()
  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: true,
  })
  email: string;

  @Column()
  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: true,
  })
  password: string;

  @Column({ default: null })
  @ApiProperty({
    example: '닉네임',
    description: 'zi.we_ek',
    required: false,
  })
  nickname: string;

  @Column({ default: null })
  @ApiProperty({
    example: 'Hi, there. I am Jiuk',
    description: '자기소개',
    required: false,
  })
  text: string;

  @Column({ default: null })
  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: false,
  })
  profileImg: string;

  @Column({ default: false })
  @ApiProperty({
    example: 'false',
    description: '버튼 활성화 여부',
    required: true,
  })
  isActive: boolean;

  @Column({ type: 'json', nullable: true })
  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: true,
  })
  region: JSON;

  @OneToMany(() => Post, (post) => post.author, { nullable: true })
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.commenter, { nullable: true })
  comments: Comment[];

  @ManyToOne(() => Authority, (authority) => authority.id, { eager: true })
  authority: Authority;

  // @OneToOne(() => Friendship, (friendship) => friendship.id, { eager: true })
  // @JoinColumn()
  // friendship: Friendship;

  // @OneToMany(() => Friendship, (friendship) => friendship.requestedFriends, {
  //   nullable: true,
  // })
  // requestedFriendship: Friendship;

  // @OneToMany(() => Friendship, (friendship) => friendship.acceptedFriends, {
  //   nullable: true,
  // })
  // acceptedFriendship: Friendship;

  @Column('simple-array')
  requesteingFriendIds: number[];

  @Column('simple-array')
  requestedFriendIds: number[];

  @Column('simple-array')
  acceptedFriendIds: number[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
