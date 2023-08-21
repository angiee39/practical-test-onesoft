import { Injectable } from '@angular/core';
import {STUDENTS} from "../mock-students";
import {Student} from "../Student";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  getStudents(): Student[] {
    return STUDENTS;
  }

  updateStudent(): boolean {
    return true;
  }

  deleteStudent(): boolean {
    return true;
  }

  constructor() { }
}
