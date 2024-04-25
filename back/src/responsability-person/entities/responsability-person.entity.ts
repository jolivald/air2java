import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "src/person/entities/person.entity";

@Entity("responsability_person", { schema: "air2java" })
export class ResponsabilityPerson {
  @PrimaryGeneratedColumn({ type: "int", name: "id_responsability_person" })
  idResponsabilityPerson: number;

  @Column("varchar", { name: "name_responsability_person", length: 150 })
  nameResponsabilityPerson: string;

  @OneToMany(() => Person, (person) => person.idResponsabilityPerson2)
  people: Person[];
}

