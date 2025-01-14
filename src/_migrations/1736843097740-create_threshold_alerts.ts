import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateThresholdAlerts1736843097740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'threshold_alerts',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v5(\'9f7ac192-bc24-4c8e-a89e-8942a39c6eda\', \'THRESHOLD_ALERT\')',
                },
                {
                    name: 'alert_type',
                    type: 'varchar',
                },
                {
                    name: 'threshold_value',
                    type: 'int',
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
        await queryRunner.query(`DROP TABLE IF EXISTS "threshold_alerts" CASCADE`);
    }

}
