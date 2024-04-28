import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from 'src/person/entities/person.entity';

@Entity('appuser', { schema: 'air2java' })
export class Appuser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_appuser' })
  idAppuser: number;

  @Column('varchar', { name: 'name_appuser', length: 150, unique: true })
  nameAppuser: string;

  @Column('varchar', { name: 'password_appuser', length: 250 })
  passwordAppuser: string;

  @Column('varchar', { name: 'type_appuser', length: 150 })
  typeAppuser: string;

  @OneToOne(() => Person, (person) => person.idAppuser2)
  person: Person;
}
