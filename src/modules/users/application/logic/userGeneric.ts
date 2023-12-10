import { Injectable } from "@nestjs/common";
import { User } from "../../domain/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class UserGeneric{

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async findByEmail(mail: string){
        return await this.userRepository.findOne({where:{MailUser:mail}});
    }
}