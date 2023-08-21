import { Component, Input } from '@angular/core';
import { Student } from 'src/app/Student';
import { SelectedStudentService } from 'src/app/services/selected-student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {

  student: Student | null = null;
  newStudent: Student = {id: 0, address: "", dateOfBirth: "", email: "", firstName: "", lastName: "", mobile: "", nic: ""};
  profilePicEmpty: string = "../../../assets/images/profile_empty.png";
  private subscription: Subscription;

  constructor(private studentService: SelectedStudentService) {
    this.subscription = this.studentService.selectedStudent$.subscribe(student => {
      this.student = student;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.studentService.setSelectedStudent(null);
  }
  @Input() isEditing: boolean = false;
  @Input() isInserting: boolean = false;
  @Input() isDeleting: boolean = false;

  addStudent() {

  }

  deleteStudent() {

  }


  editStudent() {

  }


}
