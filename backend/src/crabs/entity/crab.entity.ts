import { CrabImageFile } from 'src/uploader/entity/crabImage.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Crab {
  @PrimaryGeneratedColumn()
  id: number;

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
