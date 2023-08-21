import { Injectable } from '@angular/core';
import { Student } from '../Student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedStudentService {
  private selectedStudentSubject = new BehaviorSubject<Student | null>(null);
  selectedStudent$ = this.selectedStudentSubject.asObservable();

  selectedStudent(student: Student | null) {
    this.selectedStudentSubject.next(student);
  }
  constructor() { }
}
