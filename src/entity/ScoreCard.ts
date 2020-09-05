import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  //   BeforeInsert,
} from "typeorm";
import { Boulder } from "./Boulder";

@Entity()
export class ScoreCard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("float", { nullable: true, default: 0.0 })
  finalScore: number;

  @OneToOne((_type) => Boulder)
  @JoinColumn()
  boulder1: Boulder;

  @OneToOne((_type) => Boulder)
  @JoinColumn()
  boulder2: Boulder;

  @OneToOne((_type) => Boulder)
  @JoinColumn()
  boulder3: Boulder;

  @OneToOne((_type) => Boulder)
  @JoinColumn()
  boulder4: Boulder;
}

//   @BeforeInsert()
//   createBoulders() {
//     this.boulder1 = Boulder.create();
//     this.boulder2 = Boulder.create();
//     this.boulder3 = Boulder.create();
//     this.boulder4 = Boulder.create();
//   }
// }

// const EMPTY_BOULDER = {};
