import { IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { CreateCourseDto } from './../../courses/dto/create-course.dto';

export class CreateStudentDto {


    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    @IsString()
    name: string;

    @IsNotEmpty()
    @Min(18)
    @Max(40)
    age: number;

    @IsNotEmpty()
    coursesIDs: []

}
