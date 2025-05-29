import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { CityModelSeedData, BuildCityModelSeedData } from '../seeds/city.seed';

@Table
export class CityModel extends Model<CityModel> {
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
    const seedData: CityModelSeedData[] = await BuildCityModelSeedData();

    const cities: CityModel[] = [];
    for (const data of seedData) {
      const city: CityModel = await CityModel.create(data.city);
      cities.push(city);
    }
    return cities[0];
  }
}
