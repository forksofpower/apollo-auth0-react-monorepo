import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAccountsTable1622315384372 implements MigrationInterface {
    name = 'CreateAccountsTable1622315384372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "email" varchar NOT NULL, "auth0UserId" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_31e2fd7720a2da3af586f17778" ON "account" ("uuid") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_2af769f9384a3015122962e427" ON "account" ("auth0UserId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_2af769f9384a3015122962e427"`);
        await queryRunner.query(`DROP INDEX "IDX_31e2fd7720a2da3af586f17778"`);
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
