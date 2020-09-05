import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Athlete } from "./Athlete";

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

  @Column("jsonb", { nullable: true })
  athletes: Athlete[];
}
