import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { locationsProviders } from './locations.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationsController],
  providers: [LocationsService, ...locationsProviders],
})
export class LocationsModule {}
