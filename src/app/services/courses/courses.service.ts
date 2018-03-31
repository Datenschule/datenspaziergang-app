import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map, first, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';


@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  private courses;
  private url = '/assets/data/mock.json';

  private log(message: string) {
    console.log('Courses Service: ' + message);
  }

  getCourses(): Observable<any> {
    return this.http.get(this.url);
  }

  getCourse(id: number): Observable<any> {
    return this.getCourses().pipe(
      map(courses => {
        return courses.find((course) => course.id === id);
      })
    );
  }

  getPage(course_id: number, station_id: number, page_id: number): Observable<any> {
    return this.getCourse(course_id).pipe(
      map((course) => {
        const station = course.stations.find((curr) => curr.id === station_id);
        return station.pages.find((curr) => curr.id === page_id);
    }));
  }

  getNextPageLink(course_id: number, station_id: number, next_page_id: number): Observable<any> {
    return this.getCourse(course_id).pipe(
      map((course) => {
        const station = course.stations.find((curr) => curr.id === station_id);
        console.log(station);
        const page = station.pages.find((curr) => curr.id === next_page_id);
        if (page) {
          return `/${page.type}/${course_id}/${station_id}/${page.id}`;
        } else if (station.next) {
          return `/point-to-point/${course_id}/${station.next}`;
        } else {
          return `/success/${course_id}`;
        }
      }));
  }
}
