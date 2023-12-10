import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AdministratorsModule } from './modules/administrators/administrators.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'ccontrolz.com',
    port: 3306,
    username: 'nibcqvah_edsghot',
    database: 'nibcqvah_SaleOfTicket',
    password: 'Repro123.',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
  }),UsersModule, AdministratorsModule, AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
