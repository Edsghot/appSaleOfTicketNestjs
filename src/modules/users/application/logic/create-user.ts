import { Injectable } from "@nestjs/common";
import { User } from "../../domain/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "src/dtos/User/createUserDto";
import * as bcrypt from 'bcrypt'


@Injectable()
export class CreateUser{

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async run(data: CreateUserDto){
        const newUser = this.userRepository.create(data);
        const hashPassword = await bcrypt.hash(newUser.Password,10);
        newUser.Password = hashPassword;

        const model = await this.userRepository.save(newUser);
        
        const {Password, ...rta} = model;
        return rta;
    }
}