import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person } from 'src/person/entities/person.entity';
import { Town } from 'src/town/entities/town.entity';
import { Performance } from 'src/performance/entities/performance.entity';

@Index('id_person', ['idPerson'], {})
@Index('id_town', ['idTown'], {})
@Entity('festival', { schema: 'air2java' })
export class Festival {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_fest' })
  id: number;

  @Column('varchar', { name: 'name_fest', length: 150 })
  name: string;

  @Column('varchar', { name: 'location_fest', length: 250 })
  location: string;

  @Column('date', { name: 'start_date_fest' })
  startDate: string;

  @Column('date', { name: 'end_date_fest' })
  endDate: string;

  @Column('int', { name: 'id_person' })
  idPerson: number;

  @Column('int', { name: 'id_town' })
  idTown: number;

  @ManyToOne(() => Person, (person) => person.festivals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_person', referencedColumnName: 'id' }])
  person: Person;

  @ManyToOne(() => Town, (town) => town.festivals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_town', referencedColumnName: 'id' }])
  town: Town;

  @OneToMany(() => Performance, (performance) => performance.idFest2)
  performances: Performance[];
}
