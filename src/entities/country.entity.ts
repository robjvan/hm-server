import { Column, Entity } from 'typeorm';
import { HmEntity } from './abstract.entity';

@Entity()
export class Country extends HmEntity {
  @Column()
  name: string;

  @Column()
  isoCode: string;
}
