import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Band } from '../../band/entities/band.entity';
import { Performance } from '../../performance/entities/performance.entity';
import { Type } from '../../type/entities/type.entity';

@Index('id_type', ['idType'], {})
@Entity('track', { schema: 'air2java' })
export class Track {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_track' })
  id: number;

  @Column('varchar', { name: 'name_track', length: 250 })
  name: string;

  @Column('date', { name: 'year_track' })
  year: string;

  @Column('varchar', { name: 'author_name_track', length: 250 })
  authorName: string;

  @Column('int', { name: 'duration_track' })
  duration: number;

  @Column('int', { name: 'id_type' })
  idType: number;

  @ManyToMany(() => Band, (band) => band.tracks)
  bands: Band[];

  @ManyToMany(() => Performance, (performance) => performance.tracks)
  @JoinTable({
    name: 'setlist',
    joinColumns: [{ name: 'id_track', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'id_perf', referencedColumnName: 'id' }],
    schema: 'air2java',
  })
  performances: Performance[];

  @ManyToOne(() => Type, (type) => type.tracks, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_type', referencedColumnName: 'id' }])
  type: Type;
}
