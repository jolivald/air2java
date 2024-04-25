import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Specialisation } from "src/specialisation/entities/specialisation.entity";

@Entity("specialty", { schema: "air2java" })
export class Specialty {
  @PrimaryGeneratedColumn({ type: "int", name: "id_spec" })
  idSpec: number;

  @Column("varchar", { name: "name_spec", length: 150 })
  nameSpec: string;

  @OneToMany(() => Specialisation, (specialisation) => specialisation.idSpec2)
  specialisations: Specialisation[];
}

