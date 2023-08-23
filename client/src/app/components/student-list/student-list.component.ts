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

    constructor(private selectedStudentService: SelectedStudentService, 
      private studentDataService: StudentDataService) {}

    // students = STUDENTS;
    students: any[] = [];
    selectedStudent: Student | null = null;
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
      this.studentDataService.getStudents()
    .subscribe(students => this.students = students);
    }

    onSelect(student: Student): void {
      if (this.selectedStudent === student) {
        this.selectedStudent = null;
        this.selectedStudentService.setSelectedStudent(null);
      } else {
        this.selectedStudent = student;
        this.selectedStudentService.setSelectedStudent(student);
      }

      console.log(this.selectedStudentService.getSelectedStudent());
    }
}
