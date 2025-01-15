import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDatabaseBackups1736843146310 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'database_backups',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default:
              "uuid_generate_v5('39442fbc-44ce-4e53-b45e-0747eb34c71a', 'DATABASE_BACKUP')",
          },
          {
            name: 'backup_file',
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
    await queryRunner.query(`DROP TABLE IF EXISTS "database_backups" CASCADE`);
  }
}
