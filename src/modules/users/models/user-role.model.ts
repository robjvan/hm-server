import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {
  UserRoleModelSeedData,
  BuildUserRoleModelSeedData,
} from '../seeds/user-role.seed';

@Table
export class UserRoleModel extends Model<UserRoleModel> {
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
  name: string;

  public static async seed() {
    const seedData: UserRoleModelSeedData[] =
      await BuildUserRoleModelSeedData();

    const userRoles: UserRoleModel[] = [];
    for (const data of seedData) {
      const userRole: UserRoleModel = await UserRoleModel.create(data.userRole);
      userRoles.push(userRole);
    }
    return userRoles[0];
  }
}
