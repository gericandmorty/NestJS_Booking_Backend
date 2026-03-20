import { IsString, IsInt } from "class-validator";

export class CreateUserInformationDto {
    @IsInt()
    userId: number;
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsString()
    address: string;
    @IsString()
    phone: string;
}
