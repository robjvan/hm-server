import { DATA_SOURCE, USER_REPOSITORY } from 'src/constants';
import { DataSource } from 'typeorm';
import { User } from 'src/entities/user.entity';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
