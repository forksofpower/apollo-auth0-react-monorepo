import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDB1622530201228 implements MigrationInterface {
    name = 'InitDB1622530201228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "message" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "accountId" integer)`);
        await queryRunner.query(`CREATE TABLE "post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "accountId" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "account" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "email" varchar NOT NULL, "auth0UserId" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_31e2fd7720a2da3af586f17778" ON "account" ("uuid") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_2af769f9384a3015122962e427" ON "account" ("auth0UserId") `);
        await queryRunner.query(`CREATE TABLE "temporary_chat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "message" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "accountId" integer, CONSTRAINT "FK_24f078800e44907f51dd2ac3dae" FOREIGN KEY ("accountId") REFERENCES "account" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_chat"("id", "message", "createdAt", "accountId") SELECT "id", "message", "createdAt", "accountId" FROM "chat"`);
        await queryRunner.query(`DROP TABLE "chat"`);
        await queryRunner.query(`ALTER TABLE "temporary_chat" RENAME TO "chat"`);
        await queryRunner.query(`CREATE TABLE "temporary_post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "accountId" integer NOT NULL, CONSTRAINT "FK_f219a87fd8c020d3bb6527c9420" FOREIGN KEY ("accountId") REFERENCES "account" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_post"("id", "content", "createdAt", "accountId") SELECT "id", "content", "createdAt", "accountId" FROM "post"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`ALTER TABLE "temporary_post" RENAME TO "post"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME TO "temporary_post"`);
        await queryRunner.query(`CREATE TABLE "post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "accountId" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "post"("id", "content", "createdAt", "accountId") SELECT "id", "content", "createdAt", "accountId" FROM "temporary_post"`);
        await queryRunner.query(`DROP TABLE "temporary_post"`);
        await queryRunner.query(`ALTER TABLE "chat" RENAME TO "temporary_chat"`);
        await queryRunner.query(`CREATE TABLE "chat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "message" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "accountId" integer)`);
        await queryRunner.query(`INSERT INTO "chat"("id", "message", "createdAt", "accountId") SELECT "id", "message", "createdAt", "accountId" FROM "temporary_chat"`);
        await queryRunner.query(`DROP TABLE "temporary_chat"`);
        await queryRunner.query(`DROP INDEX "IDX_2af769f9384a3015122962e427"`);
        await queryRunner.query(`DROP INDEX "IDX_31e2fd7720a2da3af586f17778"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "chat"`);
    }

}
