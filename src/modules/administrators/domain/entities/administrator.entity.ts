import { User } from "src/modules/users/domain/entities/user.entity";
import { Column, Entity, OneToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administrator {
    @PrimaryGeneratedColumn("uuid")
    IdAdministrator: string;
    @OneToOne(()=>User,{nullable:false})
    @JoinColumn({name: "IdUser"})
    user: User;
    @Column()
    Name: string;
    @Column()
    LastName: string;
    @Column()
    Dni: string;
    @Column()
    Personmail: string;
    @Column()
    Address: string;
    @Column()
    Phone: string;
    @Column()
    Role: number;
}
