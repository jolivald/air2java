import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Festival } from 'src/festival/entities/festival.entity';
import { Person } from 'src/person/entities/person.entity';
import { Region } from 'src/region/entities/region.entity';

@Index('id_region', ['idRegion'], {})
@Entity('town', { schema: 'air2java' })
export class Town {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_town' })
  id: number;

  @Column('varchar', { name: 'postal_code_town', length: 10 })
  postalCode: string;

  @Column('int', { name: 'id_region' })
  idRegion: number;

  @Column('varchar', { name: 'name_town', length: 150 })
  name: string;

  @OneToMany(() => Festival, (festival) => festival.town)
  festivals: Festival[];

  @OneToMany(() => Person, (person) => person.id)
  people: Person[];

  @ManyToOne(() => Region, (region) => region.towns, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_region', referencedColumnName: 'id' }])
  region: Region;
}
