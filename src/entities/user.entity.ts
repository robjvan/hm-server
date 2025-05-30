import { HmEntity } from 'src/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends HmEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  roleId: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  newsletter: boolean;

  @Column({ default: false })
  haveReviewed: boolean;

  @Column()
  smsToken: number;

  @Column()
  emailToken: string;

  @Column({ default: false })
  emailConfirmed: boolean;

  // @OneToMany(type =>  )
}
