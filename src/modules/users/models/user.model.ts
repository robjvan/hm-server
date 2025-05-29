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
  })
  username: string;

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
