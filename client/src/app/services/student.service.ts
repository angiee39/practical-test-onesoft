import { Injectable } from '@angular/core';
import { Student } from '../Student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private selectedStudentSubject = new BehaviorSubject<Student | null>(null);
  selectedStudent$ = this.selectedStudentSubject.asObservable();

  selectStudent(student: Student) {
    this.selectedStudentSubject.next(student);
  }
  constructor() { }
}
