import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity('responsability_person', { schema: 'air2java' })
export class ResponsabilityPerson {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_responsability_person' })
  id: number;

  @Column('varchar', { name: 'name_responsability_person', length: 150 })
  nameResponsability: string;

  @OneToMany(() => Person, (person) => person.responsabilityPerson)
  people: Person[];
}
