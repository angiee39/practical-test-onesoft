import { Component, Input } from '@angular/core';
import { Student } from 'src/app/student.model';
import { SelectedStudentService } from 'src/app/services/selected-student.service';
import { Subscription } from 'rxjs';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {

  student: Student | null = null;
  newStudent: Student = new Student();
  profilePicEmpty: string = "../../../assets/images/profile_empty.png";
  private subscription: Subscription;

  constructor(private selectedStudentService: SelectedStudentService, private studentDataService: StudentDataService) {
    this.subscription = this.selectedStudentService.selectedStudent$.subscribe(student => {
      this.student = student;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.selectedStudentService.setSelectedStudent(null);
  }
  @Input() isEditing: boolean = false;
  @Input() isInserting: boolean = false;
  @Input() isDeleting: boolean = false;

  addStudent() {
    this.studentDataService.postStudent().subscribe();
  }

  deleteStudent() {
    if (this.student === null) return;
    this.studentDataService.deleteStudent(this.student.id).subscribe();
  }


  editStudent() {
    if (this.student === null) return;
    this.studentDataService.putStudent().subscribe();
  }


}
