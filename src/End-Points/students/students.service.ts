import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';


@Injectable()
export class StudentsService {

  constructor(@InjectModel('Students') private Students) { }

  async create(createStudentDto: CreateStudentDto) {
    // 'This action adds a new student'
    const student = await this.Students.create(createStudentDto)
    return { message: 'success, student created successfully', student };
  }

  async findAll() {
    //`This action returns all students`
    const students = await this.Students.find({}).populate('coursesIDs', 'name description duration').exec();

    return (
      students.length ? { message: `success, students returned successfully`, students }
        : { message: `error, no students found` }
    );
  }


  async findOne(id: ObjectId) {
    //`This action returns a #${id} student`
    const student = await this.Students.findById(id).populate('coursesIDs', 'name description duration').exec();

    return (
      student ? { message: `success, student of id: ${id} is found`, student }
        : { message: `error, student of id: ${id} is not found` }
    );

  }

  async update(id: ObjectId, updateStudentDto: UpdateStudentDto) {
    //`This action updates a #${id} student`;

    const updatedStudent = await this.Students.findByIdAndUpdate(id, { ...updateStudentDto }, { new: true });


    return { message: `success, student of id: ${id} updated successfully`, updatedStudent };

  }


 async remove(id: ObjectId) {

    //`This action removes a #${id} student`
    const deletedStudent = await this.Students.findByIdAndDelete(id);

    return { message: 'success, student deleted successfully', deletedStudent };
  }

}
