import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { DATA_SOURCE } from 'src/constants';

dotenv.config();

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: true, //! Never use true in prod!
      });

      return dataSource.initialize();
    },
  },
];
