import { EVENTS_REPOSITORY } from 'src/constants';
import { EventModel } from './models/event.model';

export const eventsProviders = [
  {
    provide: EVENTS_REPOSITORY,
    useValue: EventModel,
  },
];
