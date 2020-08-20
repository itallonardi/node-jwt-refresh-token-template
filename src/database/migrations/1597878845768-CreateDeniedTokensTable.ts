import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeniedTokensTable1597878845768 implements MigrationInterface {
  name = 'CreateDeniedTokensTable1597878845768'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE `denied_tokens` (`id` varchar(36) NOT NULL, `token` text NOT NULL, `reason` varchar(255) NOT NULL DEFAULT 'refresh', `invalidated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `denied_tokens`");
  }
}
