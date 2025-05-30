import { Column, Entity } from 'typeorm';
import { HmEntity } from './abstract.entity';

@Entity()
export class Location extends HmEntity {
  @Column()
  userId: number;

  @Column()
  address?: string;

  @Column()
  postalCode?: string;

  @Column()
  regionId: number;

  @Column()
  countryId: number;

  @Column()
  cityId: number;
}
