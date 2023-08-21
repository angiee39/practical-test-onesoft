import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Student';
import { SelectedStudentService } from 'src/app/services/selected-student.service';
import {StudentDataService} from "../../services/student-data.service";
@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
    studentDataService = new StudentDataService()
    students = this.studentDataService.getStudents();
    selectedStudent: Student | null = null;
    dtOptions: any = {};

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };
    }

    constructor(private studentService: SelectedStudentService) {}

    onSelect(student: Student): void {
      if (this.selectedStudent === student) {
        this.selectedStudent = null;
        this.studentService.selectedStudent(null);
      } else {
        this.selectedStudent = student;
        this.studentService.selectedStudent(student);
      }
    }
}
