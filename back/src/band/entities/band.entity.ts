import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person } from 'src/person/entities/person.entity';
import { Performance } from 'src/performance/entities/performance.entity';
import { Track } from 'src/track/entities/track.entity';

@Index('person_represent_band', ['idPerson'], {})
@Entity('band', { schema: 'air2java' })
export class Band {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_band' })
  id: number;

  @Column('varchar', { name: 'name_band', length: 150 })
  name: string;

  @Column('int', { name: 'id_person' })
  idPerson: number;

  @ManyToOne(() => Person, (person) => person.bands, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_person', referencedColumnName: 'id' }])
  person: Person;

  @OneToMany(() => Performance, (performance) => performance.band)
  performances: Performance[];

  @OneToMany(() => Person, (person) => person.band)
  people: Person[];

  @ManyToMany(() => Track, (track) => track.bands)
  @JoinTable({
    name: 'repertory',
    joinColumns: [{ name: 'id_band', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'id_track', referencedColumnName: 'idTrack' }],
    schema: 'air2java',
  })
  tracks: Track[];
}
