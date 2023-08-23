import { Injectable } from '@angular/core';
import {STUDENTS} from "../mock-students";
import {Student} from "../student.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from "../../environments/environment.development";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private baseUrl = environment.apiBaseUrl;
  private getUrl = this.baseUrl + 'Students';
  private postUrl = this.baseUrl + 'Students';
  private putUrl = this.baseUrl + 'Students/';
  private deleteUrl = this.baseUrl + 'Students/';

  list: Student[] = [];
  formData: Student = new Student();
  formSubmitted: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // updateStudent(student: Student): Observable<any> {
  //   let url = this.updateStudentUrl + student.id.toString();
  //   return this.http.put(this.updateStudentUrl, student, this.httpOptions).pipe(
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }
  //
  // deleteStudent(id: number): Observable<Student> {
  //   let url = this.deleteStudentUrl + id.toString();
  //   return this.http.delete<Student>(url, this.httpOptions).pipe(
  //     catchError(this.handleError<Student>('deleteHero'))
  //   );
  // }
  //
  // getStudents(): Observable<Student[]> {
  //   return this.http.get<Student[]>(this.getStudentsUrl)
  //     .pipe(
  //       catchError(this.handleError<Student[]>('getStudents', []))
  //     );
  // }
  //
  // addStudent(student: Student): Observable<Student> {
  //   return this.http.post<Student>(this.addStudentUrl, student, this.httpOptions)
  //   .pipe(
  //     catchError(this.handleError<Student>('addHero'))
  //   );
  // }
  //
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  getStudents() {
    this.http.get(this.getUrl)
      .subscribe({
        next: res => {
          this.list = res as Student[]
        },
        error: err => { console.log(err) }
      })
  }

  postStudent() {
    return this.http.post(this.postUrl, this.formData)
  }

  putStudent() {
    return this.http.put(this.putUrl + this.formData.id, this.formData)
  }


  deleteStudent(id: number) {
    return this.http.delete(this.deleteUrl + id)
  }


  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new Student()
    this.formSubmitted = false
  }
}
