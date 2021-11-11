import { Injectable } from '@nestjs/common';
import { Student } from './Student.model';

@Injectable()
export class StudentService {
  private students: Student[] = [];

  getAllStudents() {
    return this.students;
  }

  createStudent(
    id: string,
    Name: string,
    Gender: string,
    Address: string,
    MobileNo: string,
    DateofBirth: string,
    Age: string,
  ) {
    const student = {
      id,
      Name,
      Gender,
      Address,
      MobileNo,
      DateofBirth,
      Age,
    };

    this.students.push(student);
    return student;
  }
}
