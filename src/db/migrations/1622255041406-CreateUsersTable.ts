// import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
// import { User } from "../../core/user";

// export class CreateUsersTable1622255041406 implements MigrationInterface {
//     name = 'CreateUsersTable1622255041406'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);

//         await this.seed();
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DROP TABLE "user"`);
//     }

//     private async seed(): Promise<void> {
//         await getRepository(User).save([{
//             id: 1,
//             email: 'patrickjones.pmj@gmail.com',
//             firstName: "Patrick",
//             lastName: "Jones"
//         }])
//     }

// }
