import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  providers: [AppService],
})
export class AppModule { }
