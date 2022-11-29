import { User } from 'src/users/entity/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.requestedFriendship, {
    nullable: true,
  })
  requestedFriends: User[];

  @ManyToOne(() => User, (user) => user.responsedFriendship, {
    nullable: true,
  })
  responsedFriends: User[];
}
