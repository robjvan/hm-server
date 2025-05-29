import { CityModel } from '../models/city.model';

export type CityModelSeedData = {
  city: Partial<CityModel>;
};

export const BuildCityModelSeedData = async (): Promise<
  CityModelSeedData[]
> => {
  return [
    {
      city: {
        name: 'Grand Falls-Windsor',
      },
    },
  ];
};
