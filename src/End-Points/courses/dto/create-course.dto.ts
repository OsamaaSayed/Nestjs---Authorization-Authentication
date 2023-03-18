import { IsNotEmpty, MinLength, IsString, MaxLength, IsNumber } from "class-validator";

export class CreateCourseDto {

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(30)
    @IsString()
    name: string;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    duration: number;

}
