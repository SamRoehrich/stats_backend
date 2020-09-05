import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Boulder extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("float", { default: 0.0 })
  finalScore: number;

  @Column({ default: 0 })
  attempts: number;

  @Column({ default: false })
  appeal: boolean;
}
