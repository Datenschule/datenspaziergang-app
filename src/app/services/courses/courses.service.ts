import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, first, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {environment} from '../../../environments/environment';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  private courses;
  //private url = '/assets/data/mock.json';
  private url = environment.apiEndpoint;
  private indexUrl = this.url + '/walks.json';

  private log(message: string) {
    console.log('Courses Service: ' + message);
  }

  getCourses(): Observable<any> {
    return this.http.get(this.indexUrl);
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.url}/walks/${id}.json`);
  }

  getPage(course_id: number,
          station_id: number,
          subject_id: number,
          page_id: number): Observable<any> {
    return this.getCourse(course_id).pipe(
      map((course) => {
        if (course.status === 'success') {
          const station = course.data.walk.stations.find((curr) => curr.id === station_id);
          const subject = station.subjects.find((curr) => curr.id === subject_id);
          return subject.pages.find((curr) => curr.id === page_id);
        }
      }));
  }

  getNextPageLink(course_id: number,
                  station_id: number,
                  subject_id: number,
                  next_page_id: number): Observable<any> {
    return this.getCourse(course_id).pipe(
      map((course) => {
        if (course.status === 'success') {
          const station = course.data.walk.stations.find((curr) => curr.id === station_id);
          console.log(station);
          const subject = station.subjects.find((curr) => curr.id === subject_id);
          const page = subject.pages.find((curr) => curr.id === next_page_id);
          if (page) {
            return `/${page.type}/${course_id}/${station_id}/${subject_id}/${page.id}`;
          } else if (subject.next) { //TODO: Set active subject
            return `/subjects/${course_id}/${station.id}`;
          } else {
            return `/subjects/${course_id}/${station.id}`;
          }
        }
      }));
  }

  getNextStationLink(course_id: number,
                     station_id: number): Observable<any> {
    return this.getCourse(course_id).pipe(
      map((course) => {
        if (course.status === 'success') {
          const station = course.data.walk.stations
            .find((curr) => curr.id === station_id);
          if (station.next) {
            return `/point-to-point/${course_id}/${station.next}`;
          } else {
            return `/success/${course_id}`;
          }
        }
      }));
  }
}
