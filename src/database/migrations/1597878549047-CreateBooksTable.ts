import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBooksTable1597878549047 implements MigrationInterface {
  name = 'CreateBooksTable1597878549047'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE `books` (`id` varchar(36) NOT NULL, `title` varchar(255) NOT NULL, `description` mediumtext NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `books`");
  }
}
