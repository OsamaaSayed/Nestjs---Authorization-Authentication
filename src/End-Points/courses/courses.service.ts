import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose'



@Injectable()
export class CoursesService {

  constructor(@InjectModel('Courses') private Courses) { }


  async create(createCourseDto: CreateCourseDto) {
    // 'This action adds a new course'
    const course = await this.Courses.create(createCourseDto);
    return { message: 'success, course created successfully', course };
  }

  async findAll() {
    //`This action returns all courses`
    const courses = await this.Courses.find({}).exec();

    return (
      courses.length ? { message: `success, courses returned successfully`, courses }
        : { message: `error, no courses found` }
    );

  }

  async findOne(id: ObjectId) {
    //`This action returns a #${id} course`
    const course = await this.Courses.findById(id).exec();

    return (
      course ? { message: `success, course of id: ${id} is found`, course }
        : { message: `error, course of id: ${id} is not found` }
    );
  }

  async update(id: ObjectId, updateCourseDto: UpdateCourseDto) {
    //`This action updates a #${id} course`;

    const updatedCourse = await this.Courses.findByIdAndUpdate(id, { ...updateCourseDto }, { new: true })

    return { message: `success, course of id: ${id} updated successfully`, updatedCourse };

  }

  async remove(id: ObjectId) {
    //`This action removes a #${id} course`
    const deletedCourse = await this.Courses.findByIdAndDelete(id);

    return { message: 'success, student deleted successfully', deletedCourse };
  }
  
}
