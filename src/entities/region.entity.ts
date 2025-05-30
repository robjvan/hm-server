import { Column, Entity } from 'typeorm';
import { HmEntity } from './abstract.entity';

@Entity()
export class Region extends HmEntity {
  @Column()
  name: string;
}
