import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Band } from "src/band/entities/band.entity";
import { Performance } from "src/performance/entities/performance.entity";
import { Type } from "src/type/entities/type.entity";

@Index("id_type", ["idType"], {})
@Entity("track", { schema: "air2java" })
export class Track {
  @PrimaryGeneratedColumn({ type: "int", name: "id_track" })
  idTrack: number;

  @Column("varchar", { name: "name_track", length: 250 })
  nameTrack: string;

  @Column("date", { name: "year_track" })
  yearTrack: string;

  @Column("varchar", { name: "author_name_track", length: 250 })
  authorNameTrack: string;

  @Column("int", { name: "duration_track" })
  durationTrack: number;

  @Column("int", { name: "id_type" })
  idType: number;

  @ManyToMany(() => Band, (band) => band.tracks)
  bands: Band[];

  @ManyToMany(() => Performance, (performance) => performance.tracks)
  @JoinTable({
    name: "setlist",
    joinColumns: [{ name: "id_track", referencedColumnName: "idTrack" }],
    inverseJoinColumns: [{ name: "id_perf", referencedColumnName: "idPerf" }],
    schema: "air2java",
  })
  performances: Performance[];

  @ManyToOne(() => Type, (type) => type.tracks, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_type", referencedColumnName: "idType" }])
  idType2: Type;
}
