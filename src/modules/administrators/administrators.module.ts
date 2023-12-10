import { Module } from '@nestjs/common';
import { AdministratorsService } from './application/services/administrators.service';
import { AdministratorsController } from './infrastructure/controller/administrators.controller';
import { Administrator } from './domain/entities/administrator.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAdministrator } from './application/logic/create-administrator';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator])],
  controllers: [AdministratorsController],
  providers: [AdministratorsService,CreateAdministrator],
})
export class AdministratorsModule {}
