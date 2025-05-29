import { EventModel } from '../models/event.model';

export type EventModelSeedData = {
  event: Partial<EventModel>;
};

export const BuildEventModelSeedData = async (): Promise<
  EventModelSeedData[]
> => {
  return [
    // {
    //   event: {
    //     name: 'Grand Falls-Windsor',
    //   },
    // },
  ];
};
