import { ApiProperty } from '@nestjs/swagger';
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

  @Column({ type: 'json', nullable: true })
  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: true,
  })
  region: JSON;

  @OneToMany(() => Post, (post) => post.author, { nullable: true })
  posts: Post[];

  @ManyToOne(() => Authority, (authority) => authority.id, { eager: true })
  authority: Authority;

  @OneToOne(() => Friendship, (friendship) => friendship.id, { eager: true })
  @JoinColumn()
  friendship: Friendship;

  @OneToMany(() => Friendship, (friendship) => friendship.requestedFriends, {
    nullable: true,
  })
  requestedFriendship: Friendship;

  @OneToMany(() => Friendship, (friendship) => friendship.acceptedFriends, {
    nullable: true,
  })
  acceptedFriendship: Friendship;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
