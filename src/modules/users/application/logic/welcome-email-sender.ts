import { Injectable } from "@nestjs/common";
import { User } from "../../domain/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class WelcomeEmailSender{

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async run(userId: string){
        const user = new User();
        user.MailUser = "edsghot@gmail.com";
        user.Password = "password";

        await this.userRepository.save(user);
    }
}