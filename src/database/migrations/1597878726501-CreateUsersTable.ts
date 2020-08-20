import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1597878726501 implements MigrationInterface {
  name = 'CreateUsersTable1597878726501'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `fullname` varchar(255) NOT NULL, `phone` varchar(30) NOT NULL, `username` varchar(30) NOT NULL, `is_active` tinyint NOT NULL DEFAULT 0, `is_sup` tinyint NOT NULL DEFAULT 0, `is_admin` tinyint NOT NULL DEFAULT 0, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
    await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
    await queryRunner.query("DROP TABLE `users`");
  }
}
