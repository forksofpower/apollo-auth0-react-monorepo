import { Column, CreateDateColumn, Entity, Generated, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}