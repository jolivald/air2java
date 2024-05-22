import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Specialisation } from '../../specialisation/entities/specialisation.entity';

@Entity('specialty', { schema: 'air2java' })
export class Specialty {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_spec' })
  id: number;

  @Column('varchar', { name: 'name_spec', length: 150 })
  name: string;

  @OneToMany(() => Specialisation, (specialisation) => specialisation.specialty)
  specialisations: Specialisation[];
}
