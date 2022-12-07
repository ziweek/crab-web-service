import { CrabImageFile } from 'src/uploader/entity/crabImage.entity';
import { User } from 'src/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Crab {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.crabs, { nullable: true })
  user: User;

  @OneToMany(() => CrabImageFile, (crabImageFile) => crabImageFile.crab, {
    nullable: true,
    eager: true,
  })
  crabImageFile: CrabImageFile[];

  @Column('simple-array', { nullable: true })
  receivedFriendIds: number[];

  @Column('simple-array', { nullable: true })
  watchedFriendIds: number[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
