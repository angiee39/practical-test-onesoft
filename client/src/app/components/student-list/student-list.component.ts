import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student.model';
import {StudentService} from "../../services/student.service";
import { STUDENTS } from 'src/app/mock-students';
@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    constructor(public studentService: StudentService) {}

    // students = STUDENTS;
    profilePicEmpty: string = "../../../assets/images/profile_empty.png";
    dtOptions: any = {};

    ngOnInit(): void {
        this.loadStudents();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };
    }

    loadStudents(): void {
      this.studentService.getStudents();
    }

    onSelect(student: Student): void {
      if (this.studentService.formData === student) {
        this.studentService.formData = new Student();
      } else {
        this.studentService.formData = student;
      }

      console.log(this.studentService.formData);
    }
}
