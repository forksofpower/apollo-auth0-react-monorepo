import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./account";

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    from!: string;

    @Column()
    message!: string;

    @CreateDateColumn({ nullable: false })
    public createdAt!: Date;
  
    @UpdateDateColumn({ nullable: false })
    public updatedAt!: Date;

    @ManyToOne(() => Account, (account) => account.chats, { nullable: true })
    poster!: Account;
}