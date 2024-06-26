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
import { Band } from '../../band/entities/band.entity';
import { Festival } from '../../festival/entities/festival.entity';
import { Musician } from '../../musician/entities/musician.entity';
import { Appuser } from '../../appuser/entities/appuser.entity';
import { ResponsabilityPerson } from '../../responsability-person/entities/responsability-person.entity';
import { Town } from '../../town/entities/town.entity';
import { Specialisation } from '../../specialisation/entities/specialisation.entity';

@Index('id_appuser', ['idAppuser'], { unique: true })
@Index('id_responsability_person', ['idResponsabilityPerson'], {})
@Index('id_band', ['idBand'], {})
@Index('id_town', ['idTown'], {})
@Entity('person', { schema: 'air2java' })
export class Person {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_person' })
  id: number;

  @Column('varchar', { name: 'firstname_person', length: 150 })
  firstname: string;

  @Column('varchar', { name: 'lastname_person', length: 150 })
  lastname: string;

  @Column('varchar', { name: 'civil_status_person', length: 50 })
  civilStatus: string;

  @Column('varchar', { name: 'address_1_person', length: 250 })
  address_1: string;

  @Column('varchar', { name: 'address_2_person', nullable: true, length: 250 })
  address_2: string | null;

  @Column('varchar', { name: 'phone_person', length: 20 })
  phone: string;

  @Column('varchar', { name: 'email_person', length: 250 })
  email: string;

  @Column('date', { name: 'birthdate_person', nullable: true })
  birthdate: string | null;

  @Column('int', { name: 'id_responsability_person', nullable: true })
  idResponsabilityPerson: number | null;

  @Column('int', { name: 'id_appuser', nullable: true, unique: true })
  idAppuser: number | null;

  @Column('int', { name: 'id_band', nullable: true })
  idBand: number | null;

  @Column('int', { name: 'id_town' })
  idTown: number;

  @OneToMany(() => Band, (band) => band.id)
  bands: Band[];

  @OneToMany(() => Festival, (festival) => festival.person)
  festivals: Festival[];

  @OneToMany(() => Musician, (musician) => musician.person)
  musicians: Musician[];

  @OneToOne(() => Appuser, (appuser) => appuser.person, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_appuser', referencedColumnName: 'id' }])
  appuser: Appuser;

  @ManyToOne(
    () => ResponsabilityPerson,
    (responsabilityPerson) => responsabilityPerson.people,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([
    {
      name: 'id_responsability_person',
      referencedColumnName: 'id',
    },
  ])
  responsabilityPerson: ResponsabilityPerson;

  @ManyToOne(() => Band, (band) => band.people, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_band', referencedColumnName: 'id' }])
  band: Band;

  @ManyToOne(() => Town, (town) => town.people, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_town', referencedColumnName: 'id' }])
  town: Town;

  @OneToMany(() => Specialisation, (specialisation) => specialisation.person)
  specialisations: Specialisation[];
}
