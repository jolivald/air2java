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
  idPerf: number;

  @Column('date', { name: 'date_perf' })
  datePerf: string;

  @Column('time', { name: 'start_time_perf' })
  startTimePerf: string;

  @Column('time', { name: 'end_time_perf' })
  endTimePerf: string;

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
    joinColumns: [{ name: 'id_perf', referencedColumnName: 'idPerf' }],
    inverseJoinColumns: [
      { name: 'id_specialisation', referencedColumnName: 'idSpecialisation' },
    ],
    schema: 'air2java',
  })
  specialisations: Specialisation[];

  @ManyToMany(() => Musician, (musician) => musician.performances)
  @JoinTable({
    name: 'perform',
    joinColumns: [{ name: 'id_perf', referencedColumnName: 'idPerf' }],
    inverseJoinColumns: [
      { name: 'id_musician', referencedColumnName: 'idMusician' },
    ],
    schema: 'air2java',
  })
  musicians: Musician[];

  @ManyToOne(() => Festival, (festival) => festival.performances, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_fest', referencedColumnName: 'idFest' }])
  idFest2: Festival;

  @ManyToOne(() => Band, (band) => band.performances, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_band', referencedColumnName: 'idBand' }])
  idBand2: Band;

  @ManyToMany(() => Track, (track) => track.performances)
  tracks: Track[];
}
