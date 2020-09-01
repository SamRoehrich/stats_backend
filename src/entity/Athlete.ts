import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
} from "typeorm";

import { Record } from "./Record";

@Entity()
export class Athlete extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  dominantHand: string;

  @Column()
  email: string;

  @Column()
  dob: string;

  @Column()
  isActive: boolean;

  @OneToMany(
    (_type) => Record,
    (record) => record.AthleteId
  )
  records: Record[];
}
