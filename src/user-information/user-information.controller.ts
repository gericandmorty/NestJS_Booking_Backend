import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserInformationService } from './user-information.service';
import { CreateUserInformationDto } from './dto/create-user-information.dto';


@Controller('user-information')
export class UserInformationController {
  constructor(private readonly userInformationService: UserInformationService) { }

  @Post()
  create(@Body() createUserInformationDto: CreateUserInformationDto) {
    return this.userInformationService.create(createUserInformationDto);
  }

}
