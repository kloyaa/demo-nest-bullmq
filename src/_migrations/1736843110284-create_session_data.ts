import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSessionData1736843110284 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'session_data',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v5(\'b5f84271-afc1-4f8d-bd2c-fec599475100\', \'SESSION_DATA\')',
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
                {
                    name: 'session_token',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "session_data" CASCADE`);
    }

}
