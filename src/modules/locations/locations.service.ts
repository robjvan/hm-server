import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CityModel } from './models/city.model';
import { CountryModel } from './models/country.model';
import { RegionModel } from './models/region.model';
import {
  CITY_REPOSITORY,
  COUNTRY_REPOSITORY,
  LOCATION_REPOSITORY,
  REGION_REPOSITORY,
} from 'src/constants';
import { LocationModel } from './models/location.model';

@Injectable()
export class LocationsService {
  constructor(
    @Inject(CITY_REPOSITORY)
    private readonly cityRepo: typeof CityModel,
    @Inject(COUNTRY_REPOSITORY)
    private readonly countryRepo: typeof CountryModel,
    @Inject(REGION_REPOSITORY)
    private readonly regionRepo: typeof RegionModel,
    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepo: typeof LocationModel,
  ) {}

  /** Logger instance scoped to LocationsService for tracking and recording service-level operations and errors. */
  private logger: Logger = new Logger(LocationsService.name);

  /** Handles common error logging and throwing for service methods. */
  private handleError(error: string, errorMsg: string) {
    this.logger.error(error, errorMsg);
    throw new InternalServerErrorException(error, errorMsg);
  }
}
