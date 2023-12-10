import { Injectable } from '@nestjs/common';
import { Administrator } from '../../domain/entities/administrator.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdministrator } from '../logic/create-administrator';

@Injectable()
export class AdministratorsService {
  constructor(private readonly createAdministratorLogic: CreateAdministrator){}

  public createAdministrator(){
    return this.createAdministratorLogic.run();
  }
}
