import {
  CITY_REPOSITORY,
  COUNTRY_REPOSITORY,
  DATA_SOURCE,
  LOCATION_REPOSITORY,
  REGION_REPOSITORY,
} from 'src/constants';
import { City } from 'src/entities/city.entity';
import { Country } from 'src/entities/country.entity';
import { Region } from 'src/entities/region.entity';
import { Location } from 'src/entities/location.entity';
import { DataSource } from 'typeorm';

export const locationsProviders = [
  {
    provide: CITY_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(City),
    inject: [DATA_SOURCE],
  },
  {
    provide: COUNTRY_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Country),
    inject: [DATA_SOURCE],
  },
  {
    provide: REGION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Region),
    inject: [DATA_SOURCE],
  },
  {
    provide: LOCATION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Location),
    inject: [DATA_SOURCE],
  },
];
