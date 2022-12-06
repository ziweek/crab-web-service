import { CrabImageFile } from 'src/uploader/entity/crabImage.entity';
import { User } from 'src/users/entity/users.entity';
import {
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

  @ManyToOne(() => User, (user) => user.crabs)
  user: User;

  @OneToMany(() => CrabImageFile, (crabImageFile) => crabImageFile.crab, {
    nullable: true,
    eager: true,
  })
  crabImageFile: CrabImageFile[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
