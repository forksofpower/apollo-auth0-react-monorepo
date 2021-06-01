import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    content!: string;

    @CreateDateColumn({ nullable: false })
    public createdAt!: Date;

    @ManyToOne(() => Account, (account) => account.posts, { nullable: false })
    account!: Account;
}