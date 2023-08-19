import { Component } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  student: Student = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    nic: '',
    dateOfBirth: '',
    address: ''
  }; // Initialize with an empty student object
  isEditing: boolean = true;

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }
}
