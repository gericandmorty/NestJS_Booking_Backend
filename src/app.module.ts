import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UserInformationModule } from './user-information/user-information.module';

@Module({
  imports: [DatabaseModule, UsersModule, UserInformationModule],
  providers: [AppService],
})
export class AppModule { }
