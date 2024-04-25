import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { State } from "src/state/entities/state.entity";
import { Town } from "src/town/entities/town.entity";

@Index("id_state", ["idState"], {})
@Entity("region", { schema: "air2java" })
export class Region {
  @PrimaryGeneratedColumn({ type: "int", name: "id_region" })
  idRegion: number;

  @Column("int", { name: "id_state" })
  idState: number;

  @Column("varchar", { name: "name_region", length: 150 })
  nameRegion: string;

  @ManyToOne(() => State, (state) => state.regions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_state", referencedColumnName: "idState" }])
  idState2: State;

  @OneToMany(() => Town, (town) => town.idRegion2)
  towns: Town[];
}
