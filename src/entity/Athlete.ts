import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
  // BeforeInsert,
} from "typeorm";

import { Record } from "./Record";
import { ScoreCard } from "./ScoreCard";

@Entity()
export class Athlete extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  dominantHand: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  dob: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  ageCat: string;

  @OneToMany(
    (_type) => Record,
    (record) => record.AthleteId
  )
  records: Record[];

  @OneToOne((_type) => ScoreCard)
  @JoinColumn()
  scoreCard: ScoreCard;

  // @BeforeInsert()
  // createScoreCard() {
  //   this.scoreCard = ScoreCard.create({

  //   }).save();
  // }
}
