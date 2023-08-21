import { Component, Input } from '@angular/core';
import { Student } from 'src/app/Student';
import { StudentService } from 'src/app/services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {

  student: Student | null = null;
  private subscription: Subscription;

  constructor(private studentService: StudentService) {
    this.subscription = this.studentService.selectedStudent$.subscribe(student => {
      this.student = student;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  @Input() isEditing: boolean = true;
}
