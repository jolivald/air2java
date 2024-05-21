import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Track } from '../../track/entities/track.entity';

@Entity('type', { schema: 'air2java' })
export class Type {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_type' })
  id: number;

  @Column('varchar', { name: 'name_type', length: 150 })
  name: string;

  @OneToMany(() => Track, (track) => track.type)
  tracks: Track[];
}
