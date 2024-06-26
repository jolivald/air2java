import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Performance } from '../../performance/entities/performance.entity';
import { Specialty } from '../../specialty/entities/specialty.entity';
import { Person } from '../../person/entities/person.entity';

@Index('id_spec', ['idSpec'], {})
@Index('id_person', ['idPerson'], {})
@Entity('specialisation', { schema: 'air2java' })
export class Specialisation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_specialisation' })
  id: number;

  @Column('int', { name: 'id_spec', nullable: true })
  idSpec: number | null;

  @Column('int', { name: 'id_person' })
  idPerson: number;

  @ManyToMany(() => Performance, (performance) => performance.specialisations)
  performances: Performance[];

  @ManyToOne(() => Specialty, (specialty) => specialty.specialisations, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_spec', referencedColumnName: 'id' }])
  specialty: Specialty;

  @ManyToOne(() => Person, (person) => person.specialisations, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_person', referencedColumnName: 'id' }])
  person: Person;
}
