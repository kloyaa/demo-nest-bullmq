import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCustomLogs1736843153316 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'custom_logs',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default:
              "uuid_generate_v5('4b3f7342-4aac-4554-98fd-c95de0a3d337', 'CUSTOM_LOG')",
          },
          {
            name: 'log_message',
            type: 'varchar',
          },
          {
            name: 'log_level',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "custom_logs" CASCADE`);
  }
}
