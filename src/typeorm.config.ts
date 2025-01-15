import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [],
  useFactory: async () //   secretManagerService: SecretManagerService,
  : Promise<TypeOrmModuleOptions> => {
    //   const dbConfig: SecretEnvOptions = await secretManagerService.getSecrets();
    return {
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'password',
      database: 'demo_db',
      autoLoadEntities: true,
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    };
  },
  inject: [
    // SecretManagerService
  ],
};
