import { Component, Input } from '@angular/core';
import { Student } from 'src/app/student.model';
import { StudentService } from 'src/app/services/student.service';
import { ToastrService } from 'ngx-toastr';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {

  student: Student | null = null;
  newStudent: Student = new Student();
  profilePicEmpty: string = "../../../assets/images/profile_empty.png";

  constructor(public studentService: StudentService, private toastr: ToastrService) {

  }

  @Input() isEditing: boolean = false;
  @Input() isInserting: boolean = false;
  @Input() isDeleting: boolean = false;

  onSubmit(form: NgForm) {
    this.studentService.formSubmitted = true
    if (form.valid) {
      if (this.studentService.formData.id == 0)
        this.addStudent(form)
      else
        this.editStudent(form)
    }
  }
  addStudent(form: NgForm) {
    this.studentService.postStudent().subscribe(
      {
        next: res => {
          this.studentService.list = res as Student[]
          this.studentService.resetForm(form)
          this.toastr.success('Added successfully', 'Student Registration')
        },
        error: err => { console.log(err) }
      }
    );
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.studentService.deleteStudent(id)
        .subscribe({
          next: res => {
            this.studentService.list = res as Student[]
            this.toastr.error('Deleted successfully', 'Student Registration')
          },
          error: err => { console.log(err) }
        })
  }


  editStudent(form: NgForm) {
    this.studentService.putStudent().subscribe(
      {
        next: res => {
          this.studentService.list = res as Student[]
          this.studentService.resetForm(form)
          this.toastr.success('Updated successfully', 'Student Registration')
        },
        error: err => { console.log(err) }
      }
    );
  }
}
