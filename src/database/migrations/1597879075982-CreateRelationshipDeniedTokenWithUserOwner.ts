import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationshipDeniedTokenWithUserOwner1597879075982 implements MigrationInterface {
  name = 'CreateRelationshipDeniedTokenWithUserOwner1597879075982'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `denied_tokens` ADD `token_owner` varchar(36) NOT NULL");
    await queryRunner.query("ALTER TABLE `denied_tokens` ADD CONSTRAINT `FK_f82561e61ff40a994e9c791b44a` FOREIGN KEY (`token_owner`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `denied_tokens` DROP FOREIGN KEY `FK_f82561e61ff40a994e9c791b44a`");
    await queryRunner.query("ALTER TABLE `denied_tokens` DROP COLUMN `token_owner`");
  }
}
