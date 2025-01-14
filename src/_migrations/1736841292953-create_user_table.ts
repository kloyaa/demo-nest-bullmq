import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1736841292953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v5(\'7c85353a-45a4-4a5c-8df4-aff1417fa28b\', \'DEMO_DB\')', // Use the namespace and name as strings
                },
                {
                    name: 'name',
                    type: 'varchar',
                },

            ],
        }),
            true,
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE if exists "user" cascade`);
    }

}
