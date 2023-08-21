import { Component } from '@angular/core';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  newStudent: Student = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    nic: '',
    dateOfBirth: '',
    address: ''
  }

  student: Student = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    nic: '',
    dateOfBirth: '',
    address: ''
  }
  isEditing: boolean = false;
  isInserting: boolean = false;
  isDeleting: boolean = false;

  toggleEditMode() {
    this.isEditing = !this.isEditing;
    this.isInserting = false;
    this.isDeleting = false;
  }

  toggleInsertMode() {
    this.isInserting = !this.isInserting;
    this.isEditing = false;
    this.isDeleting = false;
  }

  toggleDeleteMode() {
    this.isDeleting = !this.isDeleting;
    this.isEditing = false;
    this.isInserting = false;
  }
}
