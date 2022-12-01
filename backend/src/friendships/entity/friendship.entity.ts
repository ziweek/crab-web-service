import { User } from 'src/users/entity/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToMany,
  Column,
} from 'typeorm';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  user: User;

  // @Column('Array', { default: [] })
  // requestedFriendIds: number[];

  // @Column('Array', { default: [] })
  // acceptedFriends: number[];

  @ManyToOne(() => User, (user) => user.requestedFriendship, {
    nullable: true,
    // eager: true,
  })
  requestedFriends: User[];

  @ManyToOne(() => User, (user) => user.acceptedFriendship, {
    nullable: true,
    // eager: true,
  })
  acceptedFriends: User[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
