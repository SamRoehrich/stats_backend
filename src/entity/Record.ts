import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Record extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  AthleteId: number;

  @Column()
  ageCat: string;

  @Column()
  mostRecent: boolean;

  @Column()
  dateRecorded: string;

  // General Climbing Stats
  @Column()
  percentOutdoors: number;

  @Column()
  percentIndoor: number;

  @Column()
  percentSportClimbing: number;

  @Column()
  percentBouldering: number;

  @Column()
  climbingDaysPerWeek: number;

  @Column()
  warmupRoutine: string;

  @Column()
  boulderingRotpunkt: number;

  @Column()
  sportRotPunkt: string;

  @Column()
  previousInjuries: string;

  // Question: Have you ever expirienced finger pain from climbing?
  @Column()
  fingerPainAfterClimbing: boolean;

  // ROM
  @Column("bool", { array: true })
  shoulderIrROM: boolean[];

  @Column("bool", { array: true })
  shoulderErROM: boolean[];

  @Column("bool", { array: true })
  latFlexibility: boolean[];

  // hip flexor test
  @Column("text", { array: true })
  thomasTest: string[];

  @Column("bool", { array: true })
  hamstringFlexibility: boolean[];

  @Column("bool", { array: true })
  thoracicRotation: boolean[];

  // Functional Tests
  @Column("float", { array: true })
  singleLegBalance30Sec: number[];

  @Column("float", { array: true })
  stepDownTest: number[];

  @Column("float", { array: true })
  upperBodyYBalance: number[];

  // Body Strength
  @Column("float", { array: true })
  shoulderErBodyStrength: number[];

  @Column("float", { array: true })
  midTraps: number[];

  @Column("float", { array: true })
  lowTraps: number[];

  @Column("float", { array: true })
  gluteusMedius: number[];

  @Column("float", { array: true })
  gastroc: number[];

  // Pulling strength
  @Column("float", { array: true })
  irForceProduction: number[];

  @Column("float", { array: true })
  erForceProduction: number[];

  @Column("float", { array: true })
  erStrengthRatio: number[];

  @Column("float", { array: true })
  irStrengthRatio: number[];

  @Column("float", { array: true })
  singleArmMaxCrimp: number[];

  @Column("float", { array: true })
  gripStrength: number[];

  @Column("float", { array: true })
  maxNumPullups: number[];

  @Column()
  increadedLumberExtension: boolean;

  @Column()
  lacksScapRetraction: boolean;

  @Column()
  extendsCervicalSpine: boolean;

  @Column()
  internallyRotatesShoulders: boolean;
}
