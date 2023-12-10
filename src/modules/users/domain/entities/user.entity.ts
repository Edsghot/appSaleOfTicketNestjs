import { PrimaryGeneratedColumn,Column, Entity } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    IdUser: string;

    @Column()
    MailUser: string;

    @Column()
    Password: string;
}