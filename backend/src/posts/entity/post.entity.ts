import { User } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
    onDelete: 'SET NULL',
  })
  author: User;
}
