import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Athlete } from "./Athlete";
import { ScoreKeeper } from "./ScoreKeeper";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  eventName: string;

  @Column({ nullable: true })
  eventLocation: string;

  @Column({ nullable: true })
  scoreKeeperCode: string;

  @Column({ nullable: true })
  eventDate: string;

  @Column({ nullable: true })
  rcName: string;

  @Column({ nullable: true })
  rcEmail: string;

  @Column({ nullable: true })
  adminPassword: string;

  @Column({ nullable: true })
  numBoulders: number;

  @Column({ nullable: true, default: 0 })
  stack: number;

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
