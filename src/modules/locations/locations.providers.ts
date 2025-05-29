import {
  CITY_REPOSITORY,
  COUNTRY_REPOSITORY,
  LOCATION_REPOSITORY,
  REGION_REPOSITORY,
} from 'src/constants';
import { CityModel } from './models/city.model';
import { CountryModel } from './models/country.model';
import { RegionModel } from './models/region.model';
import { LocationModel } from './models/location.model';

export const locationsProviders = [
  {
    provide: CITY_REPOSITORY,
    useValue: CityModel,
  },
  {
    provide: COUNTRY_REPOSITORY,
    useValue: CountryModel,
  },
  {
    provide: REGION_REPOSITORY,
    useValue: RegionModel,
  },
  {
    provide: LOCATION_REPOSITORY,
    useValue: LocationModel,
  },
];
