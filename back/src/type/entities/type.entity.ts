import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Track } from "src/track/entities/track.entity";

@Entity("type", { schema: "air2java" })
export class Type {
  @PrimaryGeneratedColumn({ type: "int", name: "id_type" })
  idType: number;

  @Column("varchar", { name: "name_type", length: 150 })
  nameType: string;

  @OneToMany(() => Track, (track) => track.idType2)
  tracks: Track[];
}
