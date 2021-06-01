import { BaseEntity, Column, CreateDateColumn, Entity, Generated, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Chat } from "./chat";
import { Post } from "./post";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    @Generated('uuid')
    @Index({ unique: true })
    uuid!: string;

    @Column({ nullable: false })
    email!: string;

    @Column({ nullable: false })
    @Index({ unique: true })
    auth0UserId!: string;

    @CreateDateColumn({ nullable: false })
    public createdAt!: Date;
  
    @UpdateDateColumn({ nullable: false })
    public updatedAt!: Date;

    @OneToMany(() => Chat, (chat) => chat.account)
    chats!: Chat[];

    @OneToMany(() => Post, (post) => post.account)
    posts!: Post[];
}