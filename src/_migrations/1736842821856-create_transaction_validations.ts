import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransactionValidations1736842821856
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transaction_validations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default:
              "uuid_generate_v5('f84c048f-ed99-4bff-b6f2-2b7dd9f93d7c', 'TRANSACTION_VALIDATION')",
          },
          {
            name: 'transaction_id',
            type: 'uuid',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'validated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE IF EXISTS "transaction_validations" CASCADE`,
    );
  }
}
