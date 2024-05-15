import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Instrument } from 'src/instrument/entities/instrument.entity';
import { Person } from 'src/person/entities/person.entity';
import { Performance } from 'src/performance/entities/performance.entity';

@Index('id_inst', ['idInst'], {})
@Index('id_person', ['idPerson'], {})
@Entity('musician', { schema: 'air2java' })
export class Musician {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_musician' })
  idMusician: number;

  @Column('int', { name: 'id_inst', nullable: true })
  idInst: number | null;

  @Column('int', { name: 'id_person', nullable: true })
  idPerson: number | null;

  @ManyToOne(() => Instrument, (instrument) => instrument.musicians, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_inst', referencedColumnName: 'idInst' }])
  idInst2: Instrument;

  @ManyToOne(() => Person, (person) => person.musicians, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_person', referencedColumnName: 'id' }])
  person: Person;

  @ManyToMany(() => Performance, (performance) => performance.musicians)
  performances: Performance[];
}
