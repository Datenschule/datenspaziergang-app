import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Course} from "../../model/course";
import {tap} from "rxjs/operators";
import {PageItem} from '../../model/page-item';
import {ComponentModel} from '../../model/component-model';


@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  private coursesUrl = 'api/courses';

  private log(message: string) {
    console.log('Courses Service: ' + message)
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  getCourse(id: number): Observable<Course> {
    console.log('fetching course');
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get<Course>(url).pipe(
      tap(_ => this.log(`fetched course id=${id}`)),
    );
  }

  getPageForCourse(course_id: number, page_id: number): Observable<ComponentModel> {
    return new Observable((observer) => {
      this.getCourse(course_id).subscribe(course => {
        observer.next(course.pages.find(page => page.id === page_id));
      });
    });
  }
}
