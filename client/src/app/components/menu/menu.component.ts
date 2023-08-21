import { Component, Output, EventEmitter } from '@angular/core';
import {SelectedStudentService} from "../../services/selected-student.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() toggleEdit = new EventEmitter<void>();
  @Output() toggleInsert = new EventEmitter<void>
  @Output() toggleDelete = new EventEmitter<void>();

  constructor(private selectedStudentService: SelectedStudentService) {
  }
  toggleEditMode() {
    const selectedStudent = this.selectedStudentService.getSelectedStudent();
    if (selectedStudent === null) {
      window.alert('Select a student to edit!');
    } else {
      this.toggleEdit.emit();
    }
  }

  toggleInsertMode() {
    this.toggleInsert.emit();
  }

  toggleDeleteMode() {
    const selectedStudent = this.selectedStudentService.getSelectedStudent();
    if (selectedStudent === null) {
      window.alert('Select a student to delete!');
    } else {
      this.toggleDelete.emit();
    }
  }
}
