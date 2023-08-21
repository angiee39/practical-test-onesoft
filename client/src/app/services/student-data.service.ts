import { Injectable } from '@angular/core';
import {STUDENTS} from "../mock-students";
import {Student} from "../Student";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private baseURL = 'https://shorturl.at/api/getStudents';
  private getStudentsURL = this.baseURL + '/getStudents'
  private addStudentUrl = '';
  private updateStudentUrl = '';
  private deleteStudentUrl = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.updateStudentUrl, student, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteStudent(id: number): Observable<Student> {
  
    return this.http.delete<Student>(this.deleteStudentUrl, this.httpOptions).pipe(
      catchError(this.handleError<Student>('deleteHero'))
    );
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getStudentsURL)
      .pipe(
        catchError(this.handleError<Student[]>('getStudents', []))
      );
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.addStudentUrl, student, this.httpOptions)
    .pipe(
      catchError(this.handleError<Student>('addHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
