import { Component, Output, EventEmitter } from '@angular/core';
import {StudentService} from "../../services/student.service";
import { Student } from 'src/app/student.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() toggleEdit = new EventEmitter<void>();
  @Output() toggleInsert = new EventEmitter<void>
  @Output() toggleDelete = new EventEmitter<void>();

  constructor(private studentService: StudentService) {
  }
  toggleEditMode() {
    const selectedStudent = this.studentService.formData;
    if (selectedStudent.id === 0) {
      window.alert('Select a student to edit!');
    } else {
      this.toggleEdit.emit();
    }
  }

  toggleInsertMode() {
    this.studentService.formData = new Student();
    this.toggleInsert.emit();
  }

  toggleDeleteMode() {
    const selectedStudent = this.studentService.formData;
    if (selectedStudent.id === 0) {
      window.alert('Select a student to delete!');
    } else {
      this.toggleDelete.emit();
    }
  }
}
