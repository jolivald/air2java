import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Region } from "src/region/entities/region.entity";

@Entity("state", { schema: "air2java" })
export class State {
  @PrimaryGeneratedColumn({ type: "int", name: "id_state" })
  idState: number;

  @Column("varchar", { name: "name_state", length: 150 })
  nameState: string;

  @OneToMany(() => Region, (region) => region.idState2)
  regions: Region[];
}
