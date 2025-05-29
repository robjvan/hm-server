import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserModel } from 'src/modules/users/models/user.model';
import {
  LocationModelSeedData,
  BuildLocationModelSeedData,
} from '../seeds/location.seed';
import { CityModel } from './city.model';
import { CountryModel } from './country.model';
import { RegionModel } from './region.model';

// Describes where an item is stored.  E.g. "Home", "Cabin", "Office", etc.
@Table
export class LocationModel extends Model<LocationModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @ForeignKey(() => UserModel)
  @Column(DataType.INTEGER)
  userId: number;

  @Column(DataType.TEXT)
  name: string;

  @Column(DataType.TEXT)
  address?: string;

  @Column(DataType.TEXT)
  postalCode?: string;

  @ForeignKey(() => RegionModel)
  @Column(DataType.INTEGER)
  regionId?: number;

  @ForeignKey(() => CityModel)
  @Column(DataType.INTEGER)
  cityId?: number;

  @ForeignKey(() => CountryModel)
  @Column(DataType.INTEGER)
  countryId?: number;

  public static async seed() {
    const seedData: LocationModelSeedData[] =
      await BuildLocationModelSeedData();

    const locations: LocationModel[] = [];
    for (const data of seedData) {
      const location: LocationModel = await LocationModel.create(data.location);
      locations.push(location);
    }
    return locations[0];
  }
}
