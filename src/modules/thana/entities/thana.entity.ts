import { District } from 'src/modules/districts/entities/district.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'thana' }) // database name
export class Thana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true, comment: 'Thana Bangla Name' })
  name_bn: string;

  @ManyToOne((type) => District, (district) => district.thanaList)
  district: District;

  @Column({ type: 'varchar', nullable: true, comment: 'Thana English Name' })
  name_en: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
