import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { courseSchema } from './entities/courses.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Courses", schema: courseSchema }])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule { }
