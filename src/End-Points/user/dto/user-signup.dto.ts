import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, min, MinLength, Min, IsEmail, IsBoolean } from "class-validator";

export class UserSignupDto {


    @IsNotEmpty()
    @IsString()
    @MinLength(3, { message: 'name must be 3 characters at least' })
    @MaxLength(20, { message: 'name must be 20 characters at max' })
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive({ message: 'only positive value' })
    @Min(18, { message: 'age must be equal or greater than 18' })
    age: number;


    @IsNotEmpty({ message: 'email required' })
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'password required' })
    @IsString()
    password: string;

    @IsBoolean()
    isAdmin: boolean;
    
}