import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Administrator } from "../../domain/entities/administrator.entity";


@Injectable()
export class CreateAdministrator{

    constructor(@InjectRepository(Administrator) private userRepository: Repository<Administrator>){}

    async run(){
        return "creado";
    }
}