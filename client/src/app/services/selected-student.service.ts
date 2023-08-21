import { Injectable } from '@angular/core';
import { Student } from '../Student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedStudentService {
  private selectedStudentSubject = new BehaviorSubject<Student | null>(null);
  selectedStudent$ = this.selectedStudentSubject.asObservable();

  setSelectedStudent(student: Student | null) {
    this.selectedStudentSubject.next(student);
  }
  getSelectedStudent(): Student | null {
    return this.selectedStudentSubject.value;
  }
  constructor() { }
}
