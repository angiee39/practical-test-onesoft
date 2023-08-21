import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Student';
import { SelectedStudentService } from 'src/app/services/selected-student.service';
import {StudentDataService} from "../../services/student-data.service";
import { HttpClient } from '@angular/common/http';
import { STUDENTS } from 'src/app/mock-students';
@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    constructor(private selectedStudentService: SelectedStudentService, private studentDataService: StudentDataService) {}

    students = STUDENTS;
    // students: any[] = [];
    selectedStudent: Student | null = null;
    dtOptions: any = {};

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };
    }

    loadStudents(): void {
      this.studentDataService.getStudents().subscribe(
        (data: any) => {
          this.students = data;
        },
        (error: any) => {
          console.error('Error fetching students:', error);
        }
      );
    }

    onSelect(student: Student): void {
      if (this.selectedStudent === student) {
        this.selectedStudent = null;
        this.selectedStudentService.selectedStudent(null);
      } else {
        this.selectedStudent = student;
        this.selectedStudentService.selectedStudent(student);
      }
    }
}
