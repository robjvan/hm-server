import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {
  CountryModelSeedData,
  BuildCountryModelSeedData,
} from '../seeds/country.seed';

@Table
export class CountryModel extends Model<CountryModel> {
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

  @Column(DataType.TEXT)
  isoCode: string;

  public static async seed() {
    const seedData: CountryModelSeedData[] = await BuildCountryModelSeedData();

    const countries: CountryModel[] = [];
    for (const data of seedData) {
      const country: CountryModel = await CountryModel.create(data.country);
      countries.push(country);
    }
    return countries[0];
  }
}
