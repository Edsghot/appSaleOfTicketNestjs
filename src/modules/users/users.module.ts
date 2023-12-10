import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/controller/users.controller'
import { UsersService } from './application/services/users.service';
import { WelcomeEmailSender } from './application/logic/welcome-email-sender';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { CreateUser } from './application/logic/create-user';
import { UserGeneric } from './application/logic/userGeneric';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService,WelcomeEmailSender,CreateUser,UserGeneric],
  exports: [UserGeneric,CreateUser],
})
export class UsersModule {}
