import { Component } from '@angular/core';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  student: Student = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    nic: '',
    dateOfBirth: '',
    address: ''
  }
  isEditing: boolean = true;

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }
}
