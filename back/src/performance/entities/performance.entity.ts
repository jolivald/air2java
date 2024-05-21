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
import { Specialisation } from 'src/specialisation/entities/specialisation.entity';
import { Musician } from 'src/musician/entities/musician.entity';
import { Festival } from 'src/festival/entities/festival.entity';
import { Band } from 'src/band/entities/band.entity';
import { Track } from 'src/track/entities/track.entity';

@Index('id_fest', ['idFest'], {})
@Index('id_band', ['idBand'], {})
@Entity('performance', { schema: 'air2java' })
export class Performance {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_perf' })
  id: number;

  @Column('date', { name: 'date_perf' })
  date: string;

  @Column('time', { name: 'start_time_perf' })
  startTime: string;

  @Column('time', { name: 'end_time_perf' })
  endTime: string;

  @Column('int', { name: 'id_fest' })
  idFest: number;

  @Column('int', { name: 'id_band' })
  idBand: number;

  @ManyToMany(
    () => Specialisation,
    (specialisation) => specialisation.performances,
  )
  @JoinTable({
    name: 'participate',
    joinColumns: [{ name: 'id_perf', referencedColumnName: 'id' }],
    inverseJoinColumns: [
      { name: 'id_specialisation', referencedColumnName: 'id' },
    ],
    schema: 'air2java',
  })
  specialisations: Specialisation[];

  @ManyToMany(() => Musician, (musician) => musician.performances)
  @JoinTable({
    name: 'perform',
    joinColumns: [{ name: 'id_perf', referencedColumnName: 'id' }],
    inverseJoinColumns: [
      { name: 'id_musician', referencedColumnName: 'id' },
    ],
    schema: 'air2java',
  })
  musicians: Musician[];

  @ManyToOne(() => Festival, (festival) => festival.performances, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_fest', referencedColumnName: 'id' }])
  festival: Festival;

  @ManyToOne(() => Band, (band) => band.performances, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_band', referencedColumnName: 'id' }])
  band: Band;

  @ManyToMany(() => Track, (track) => track.performances)
  tracks: Track[];
}
