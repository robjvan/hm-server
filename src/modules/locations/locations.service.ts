import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
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

  private repoMap = {
    location: this.locationRepo,
    country: this.countryRepo,
    city: this.cityRepo,
    region: this.regionRepo,
  };

  private async fetchRecordById(key: string, id: number): Promise<any> {
    try {
      const repo = this.repoMap[key];

      const result = await repo.findOne({ where: { id } });

      if (!result) {
        throw new NotFoundException(
          `${key} record with id ${id} does not exist`,
        );
      }

      return result;
    } catch (err: any) {
      this.handleError(
        `Failed to fetch ${key} record with id ${id}`,
        err.message,
      );
    }
  }

  public getMetrics() {}

  public async fetchOneByUserId(userId: number) {
    try {
      let city: string, country: string, region: string;
      const result = await this.locationRepo.findOne({ where: { userId } });

      if (!result) {
        throw new NotFoundException();
      }
      console.log(await this.cityRepo.findAll());

      if (result.cityId)
        city = await this.fetchRecordById('city', result.cityId);

      if (result.countryId)
        country = await this.fetchRecordById('country', result.countryId);

      if (result.regionId)
        region = await this.fetchRecordById('region', result.regionId);

      return { ...result, city, country, region };
    } catch (err: any) {
      this.handleError(
        `Failed to fetch location record for userId ${userId}`,
        err.message,
      );
    }
  }
}
