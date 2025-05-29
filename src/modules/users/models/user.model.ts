import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { BuildUserModelSeedData, UserModelSeedData } from '../seeds/user.seed';

@Table
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  roleId: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  newsletter: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  haveReviewed: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  smsToken: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  emailToken: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  emailConfirmed: boolean;

  public static async seed() {
    const seedData: UserModelSeedData[] = await BuildUserModelSeedData();

    const users: UserModel[] = [];
    for (const data of seedData) {
      const user: UserModel = await UserModel.create(data.user);
      users.push(user);
    }
    return users[0];
  }
}
