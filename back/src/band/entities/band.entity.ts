import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Person } from "src/person/entities/person.entity";
import { Performance } from "src/performance/entities/performance.entity";
import { Track } from "src/track/entities/track.entity";

@Index("person_represent_band", ["idPerson"], {})
@Entity("band", { schema: "air2java" })
export class Band {
  @PrimaryGeneratedColumn({ type: "int", name: "id_band" })
  idBand: number;

  @Column("varchar", { name: "name_band", length: 150 })
  nameBand: string;

  @Column("int", { name: "id_person" })
  idPerson: number;

  @ManyToOne(() => Person, (person) => person.bands, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_person", referencedColumnName: "idPerson" }])
  idPerson2: Person;

  @OneToMany(() => Performance, (performance) => performance.idBand2)
  performances: Performance[];

  @OneToMany(() => Person, (person) => person.idBand2)
  people: Person[];

  @ManyToMany(() => Track, (track) => track.bands)
  @JoinTable({
    name: "repertory",
    joinColumns: [{ name: "id_band", referencedColumnName: "idBand" }],
    inverseJoinColumns: [{ name: "id_track", referencedColumnName: "idTrack" }],
    schema: "air2java",
  })
  tracks: Track[];
}
