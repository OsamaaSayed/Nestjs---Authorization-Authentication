import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Role } from '../user/guard/role.enum';
import { Roles } from '../user/guard/roles.decorator';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

  constructor(private readonly coursesService: CoursesService) { }


  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.coursesService.findOne(id);
  }

  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.coursesService.remove(id);
  }
}
