import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class HmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;
}
