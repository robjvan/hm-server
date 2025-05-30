import { Column, Entity } from 'typeorm';
import { HmEntity } from './abstract.entity';

@Entity()
export class City extends HmEntity {
  @Column()
  name: string;
}
