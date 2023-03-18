import { IsNotEmpty, IsString, IsEmail } from "class-validator";


export class UserLoginDto {


    @IsNotEmpty({ message: 'email required' })
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'password required' })
    @IsString()
    password: string;


}