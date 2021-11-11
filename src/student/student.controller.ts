import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService;
  }

  @Post()
  createStudent(@Body() request) {
    return this.studentService.createStudent(
      request.id,
      request.Name,
      request.Gender,
      request.Address,
      request.MobileNo,
      request.DateofBirth,
      request.Age,
    );
  }
}
