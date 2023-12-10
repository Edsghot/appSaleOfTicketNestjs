import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,SetMetadata } from '@nestjs/common';
import { AdministratorsService } from '../../application/services/administrators.service';
import {ApiKeyGuard} from '../../../../auth/guards/api-key.guard'
import {Public} from '../../../../auth/decorators/public.decorator'

@UseGuards(ApiKeyGuard)
@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Public()
  @Get()
  createAdministrator(){
    return this.administratorsService.createAdministrator();
  }
}

