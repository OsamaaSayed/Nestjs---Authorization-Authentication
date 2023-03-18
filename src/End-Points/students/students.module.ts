import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './entities/students.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Students", schema: studentSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule { }
