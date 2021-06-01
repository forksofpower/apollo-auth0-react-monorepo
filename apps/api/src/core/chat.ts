import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./account";

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    message!: string;

    @CreateDateColumn({ nullable: false })
    public createdAt!: Date;

    @ManyToOne(() => Account, (account) => account.chats, { nullable: true })
    account!: Account;
}