import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from '../../application/services/users.service';
import { CreateUserDto } from 'src/dtos/User/createUserDto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.emailSender(id);
  }

  @Post('create')
  async create(@Body() data: CreateUserDto) {
    return await this.usersService.CreateUser(data);
  }
}
