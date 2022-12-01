import { User } from 'src/users/entity/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.requestedFriendship, {
    nullable: true,
  })
  requestedFriends: User[];

  @ManyToOne(() => User, (user) => user.acceptedFriendship, {
    nullable: true,
  })
  acceptedFriends: User[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
