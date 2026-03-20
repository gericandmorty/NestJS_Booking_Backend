import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInformationDto } from './dto/create-user-information.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserInformationService {
  constructor(private readonly prisma: PrismaService) { }

  async create(CreateUserInformationDto: CreateUserInformationDto) {
    try {
      return await this.prisma.userInformation.create({
        data: CreateUserInformationDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('A user with this userId already exists.');
      }
      throw error;
    }
  }

}
