import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../../mock-students';
import { Student } from 'src/app/Student';
import { StudentService } from 'src/app/services/student.service';
@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
    students = STUDENTS;
    selectedStudent: Student | null = null;
    dtOptions: any = {};

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };
    }

    constructor(private studentService: StudentService) {}

    onSelect(student: Student): void {
        this.selectedStudent = (this.selectedStudent === student) ? null : student;
        this.studentService.selectStudent(student);
    }
}
