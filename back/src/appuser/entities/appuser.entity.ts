import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity('appuser', { schema: 'air2java' })
export class Appuser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_appuser' })
  id: number;

  @Column('varchar', { name: 'name_appuser', length: 150, unique: true })
  name: string;

  @Column('varchar', { name: 'password_appuser', length: 250 })
  password: string;

  @Column('varchar', { name: 'type_appuser', length: 150 })
  type: string;

  @OneToOne(() => Person, (person) => person.id)
  person: Person;
}
