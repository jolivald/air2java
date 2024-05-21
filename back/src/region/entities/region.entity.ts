import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { State } from 'src/state/entities/state.entity';
import { Town } from 'src/town/entities/town.entity';

@Index('id_state', ['idState'], {})
@Entity('region', { schema: 'air2java' })
export class Region {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_region' })
  id: number;

  @Column('int', { name: 'id_state' })
  idState: number;

  @Column('varchar', { name: 'name_region', length: 150 })
  name: string;

  @ManyToOne(() => State, (state) => state.regions, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_state', referencedColumnName: 'id' }])
  state: State;

  @OneToMany(() => Town, (town) => town.id)
  towns: Town[];
}
