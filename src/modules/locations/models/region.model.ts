import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {
  RegionModelSeedData,
  BuildRegionModelSeedData,
} from '../seeds/region.seed';

@Table
export class RegionModel extends Model<RegionModel> {
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
    const seedData: RegionModelSeedData[] = await BuildRegionModelSeedData();

    const regions: RegionModel[] = [];
    for (const data of seedData) {
      const region: RegionModel = await RegionModel.create(data.region);
      regions.push(region);
    }
    return regions[0];
  }
}
