import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Band } from 'src/band/entities/band.entity';
import { Festival } from 'src/festival/entities/festival.entity';
import { Musician } from 'src/musician/entities/musician.entity';
import { Appuser } from 'src/appuser/entities/appuser.entity';
import { ResponsabilityPerson } from 'src/responsability-person/entities/responsability-person.entity';
import { Town } from 'src/town/entities/town.entity';
import { Specialisation } from 'src/specialisation/entities/specialisation.entity';

@Index('id_appuser', ['idAppuser'], { unique: true })
@Index('id_responsability_person', ['idResponsabilityPerson'], {})
@Index('id_band', ['idBand'], {})
@Index('id_town', ['idTown'], {})
@Entity('person', { schema: 'air2java' })
export class Person {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_person' })
  idPerson: number;

  @Column('varchar', { name: 'firstname_person', length: 150 })
  firstnamePerson: string;

  @Column('varchar', { name: 'lastname_person', length: 150 })
  lastnamePerson: string;

  @Column('varchar', { name: 'civil_status_person', length: 50 })
  civilStatusPerson: string;

  @Column('varchar', { name: 'address_1_person', length: 250 })
  address_1Person: string;

  @Column('varchar', { name: 'address_2_person', nullable: true, length: 250 })
  address_2Person: string | null;

  @Column('varchar', { name: 'phone_person', length: 20 })
  phonePerson: string;

  @Column('varchar', { name: 'email_person', length: 250 })
  emailPerson: string;

  @Column('date', { name: 'birthdate_person', nullable: true })
  birthdatePerson: string | null;

  @Column('int', { name: 'id_responsability_person', nullable: true })
  idResponsabilityPerson: number | null;

  @Column('int', { name: 'id_appuser', nullable: true, unique: true })
  idAppuser: number | null;

  @Column('int', { name: 'id_band', nullable: true })
  idBand: number | null;

  @Column('int', { name: 'id_town' })
  idTown: number;

  @OneToMany(() => Band, (band) => band.idPerson2)
  bands: Band[];

  @OneToMany(() => Festival, (festival) => festival.person)
  festivals: Festival[];

  @OneToMany(() => Musician, (musician) => musician.idPerson2)
  musicians: Musician[];

  @OneToOne(() => Appuser, (appuser) => appuser.person, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_appuser', referencedColumnName: 'id' }])
  idAppuser2: Appuser;

  @ManyToOne(
    () => ResponsabilityPerson,
    (responsabilityPerson) => responsabilityPerson.people,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([
    {
      name: 'id_responsability_person',
      referencedColumnName: 'idResponsabilityPerson',
    },
  ])
  idResponsabilityPerson2: ResponsabilityPerson;

  @ManyToOne(() => Band, (band) => band.people, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_band', referencedColumnName: 'idBand' }])
  idBand2: Band;

  @ManyToOne(() => Town, (town) => town.people, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_town', referencedColumnName: 'idTown' }])
  idTown2: Town;

  @OneToMany(() => Specialisation, (specialisation) => specialisation.idPerson2)
  specialisations: Specialisation[];
}
