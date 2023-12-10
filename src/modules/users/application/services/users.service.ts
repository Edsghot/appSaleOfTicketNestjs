import { Injectable } from "@nestjs/common";
import { WelcomeEmailSender } from "../logic/welcome-email-sender";
import { CreateUser } from "../logic/create-user";
import { CreateUserDto } from "src/dtos/User/createUserDto";
import { UserGeneric } from "../logic/userGeneric";

@Injectable()
export class UsersService{
    
    constructor(
    private readonly welcomeService: WelcomeEmailSender,
    private readonly createUserService: CreateUser,
    private readonly genericService: UserGeneric){}

    public emailSender(userId:string){
        return this.welcomeService.run(userId);
    }

    async CreateUser(data: CreateUserDto){
        return await this.createUserService.run(data);
    }

    async findByEmail(mail: string){
        return await this.genericService.findByEmail(mail)
    }


}