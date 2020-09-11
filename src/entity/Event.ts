import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Athlete } from "./Athlete";
import { ScoreKeeper } from "./ScoreKeeper";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  host: string;

  @Column({ nullable: true })
  scoreKeeperCode: string;

  @Column("jsonb", { default: defaultScoreKeepers, nullable: true })
  scoreKeepers: ScoreKeeper[];

  @Column("jsonb", { nullable: true })
  athletes: Athlete[];
}

var defaultScoreKeepers = {
  boulder1: 0,
  boulder2: 0,
  boulder3: 0,
  boulder4: 0,
};
