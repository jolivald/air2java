import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Musician } from 'src/musician/entities/musician.entity';

@Entity('instrument', { schema: 'air2java' })
export class Instrument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_inst' })
  id: number;

  @Column('varchar', { name: 'name_inst', length: 150 })
  name: string;

  @OneToMany(() => Musician, (musician) => musician.id)
  musicians: Musician[];
}
