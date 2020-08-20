import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationshipBooksAndUserOwner1597879378489 implements MigrationInterface {
  name = 'CreateRelationshipBooksAndUserOwner1597879378489'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `books` ADD `open_by` varchar(36) NOT NULL");
    await queryRunner.query("ALTER TABLE `books` ADD CONSTRAINT `FK_e029fa4ae80bf089c8b77a9d702` FOREIGN KEY (`open_by`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `books` DROP FOREIGN KEY `FK_e029fa4ae80bf089c8b77a9d702`");
    await queryRunner.query("ALTER TABLE `books` DROP COLUMN `open_by`");
  }
}
