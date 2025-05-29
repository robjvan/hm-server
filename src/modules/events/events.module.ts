import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { eventsProviders } from './events.providers';

@Module({
  controllers: [EventsController],
  providers: [EventsService, ...eventsProviders],
})
export class EventsModule {}
