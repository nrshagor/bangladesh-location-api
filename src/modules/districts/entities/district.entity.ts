import { Division } from 'src/modules/divisions/entities/division.entity';
import { Thana } from 'src/modules/thana/entities/thana.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'district' }) // database name
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true, comment: 'District Bangla Name' })
  name_bn: string;

  @Column({ type: 'varchar', nullable: true, comment: 'District English Name' })
  name_en: string;

  @ManyToOne((type) => Division, (division) => division.districtList)
  division: Division;

  @OneToMany(() => Thana, (thana) => thana.district)
  thanaList: Thana[];

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
