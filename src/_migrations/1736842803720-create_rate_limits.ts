import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRateLimits1736842803720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rate_limits',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default:
              "uuid_generate_v5('a4191d8a-8f67-4e31-9b44-bd34e7f5402c', 'RATE_LIMIT')",
          },
          {
            name: 'max_requests',
            type: 'int',
          },
          {
            name: 'time_window',
            type: 'int',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "rate_limits" CASCADE`);
  }
}
