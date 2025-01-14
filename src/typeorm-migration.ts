import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'demo_db',
    entities: [
        // Use a dynamic check for production vs development
        process.env.NODE_ENV === 'production'
            ? 'dist/entities/**/*.entity.js' // For production, point to compiled .js files
            : 'src/entities/**/*.entity.ts',  // For development, point to .ts files
    ],
    migrationsTableName: "_migration",
    migrations: [
        // Ensure migrations path is also correct
        process.env.NODE_ENV === 'production'
            ? 'dist/_migrations/**/*{.ts,.js}' // For production, use .js files
            : 'src/_migrations/**/*{.ts,.js}', // For development, use .ts files
    ],
    synchronize: false, // Don't use synchronize in production
    logging: true,
});

AppDataSource.initialize()
    .then(() => console.log("AppDataSource initialized"))
    .catch((error) => console.log("AppDataSource failed to initialize", error));

export default AppDataSource;
