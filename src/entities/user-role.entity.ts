import { HmEntity } from 'src/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserRole extends HmEntity {
  @Column()
  name: string;
}
