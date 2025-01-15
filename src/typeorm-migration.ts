import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'demo_db',
  entities: ['dist/**/*.entity{.js}'],
  migrationsTableName: '_migration',
  migrations: [__dirname + '/_migrations/**/*{.ts,.js}'],
  synchronize: false, // Don't use synchronize in production
  logging: true,
});

AppDataSource.initialize()
  .then(() => console.log('AppDataSource initialized'))
  .catch((error) => console.log('AppDataSource failed to initialize', error));

export default AppDataSource;
