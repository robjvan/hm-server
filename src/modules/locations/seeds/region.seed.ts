import { RegionModel } from '../models/region.model';

export type RegionModelSeedData = {
  region: Partial<RegionModel>;
};

export const BuildRegionModelSeedData = async (): Promise<
  RegionModelSeedData[]
> => {
  return [
    {
      region: {
        name: 'Newfoundland',
      },
    },
  ];
};
