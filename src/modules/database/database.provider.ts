// import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';
import { devConfig, prodConfig, testConfig } from './database.config';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from 'src/constants';
import { UserModel } from '../users/models/user.model';
import { LocationModel } from '../locations/models/location.model';
import { CityModel } from '../locations/models/city.model';
import { CountryModel } from '../locations/models/country.model';
import { RegionModel } from '../locations/models/region.model';
import { EventModel } from '../events/models/event.model';
import { UserRoleModel } from '../users/models/user-role.model';

dotenv.config();

const logger: Logger = new Logger('[DatabaseProviders]');

// Define databaseProviders array containing a provider object
export const databaseProviders = [
  {
    // Provide Sequelize instance as SEQUELIZE token
    provide: SEQUELIZE,
    // Factory function to create and configure Sequelize instance asynchronously
    useFactory: async () => {
      let sequelize;

      switch (process.env.NODE_ENV) {
        case TEST:
          sequelize = testConfig;
          break;
        case PRODUCTION:
          sequelize = prodConfig;
          break;
        case DEVELOPMENT:
        default:
          sequelize = devConfig;
          break;
      }

      // Add database models to the Sequelize instance
      sequelize.addModels([
        //! Add db models here
        CityModel,
        EventModel,
        CountryModel,
        LocationModel,
        RegionModel,
        UserModel,
        UserRoleModel,
        // UserLoginRecordModel,
      ]);

      // sequelize.addModels([__dirname + '/**/*.model.ts']);

      const safeSeed = (
        type: string,
        fn: (...args: any[]) => any,
        ...args: any[]
      ): any => {
        try {
          logger.log(`Seeding ${type}`);
          return fn(...args);
        } catch (error) {
          console.error(`Error seeding ${type}`, error);
        }
      };

      // Synchronize the database models with the database
      await sequelize.sync({
        force: true, // TODO: NEVER USE 'force: true' in production!!
      });

      const seedDB: boolean = process.env.SEED_DB == 'true';
      if (seedDB) {
        const logger: Logger = new Logger('DatabaseProvider');

        try {
          // Seeding happens here
          // logger.log('SeedDB = ' + seedDB);

          // // Seed sample location data
          logger.verbose('Seeding sample location data...');
          await safeSeed('Cities', CityModel.seed);
          await safeSeed('Countries', CountryModel.seed);
          await safeSeed('Regions', RegionModel.seed);
          await safeSeed('Locations', LocationModel.seed);

          // Seed sample user data
          logger.verbose('Seeding sample user data...');
          // await safeSeed('UserPlatforms', UserPlatformModel.seed);
          await safeSeed('UserRoles', UserRoleModel.seed);
          await safeSeed('Users', UserModel.seed);
          // await safeSeed('UserSubscriptions', UserSubscriptionModel.seed);
          // await safeSeed('UserProfiles', UserProfileModel.seed);

          await safeSeed('Events', EventModel.seed);
          logger.verbose('Seeding done!');
        } catch (err) {
          console.error('Error seeding database', err);
        }
      }

      // Return the configured Sequelize instance
      return sequelize;
    },
  },
];
