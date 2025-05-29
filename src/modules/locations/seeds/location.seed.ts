import { LocationModel } from '../models/location.model';

export type LocationModelSeedData = {
  location: Partial<LocationModel>;
};

export const BuildLocationModelSeedData = async (): Promise<
  LocationModelSeedData[]
> => {
  return [
    {
      location: {
        name: 'Home',
        cityId: 1,
        countryId: 1,
        regionId: 1,
        address: '4A Pinewood Ave',
        postalCode: 'A2B1G2',
        userId: 1,
      },
    },
  ];
};
