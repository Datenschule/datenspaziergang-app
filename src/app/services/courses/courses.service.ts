import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Course} from '../../model/course';
import {COURSES} from '../../mock_data';
import {of} from 'rxjs/observable/of';
import {Stations} from '../../model/stations';
import Station = Stations.Station;
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import OverviewStation = Stations.OverviewStation;
import {map, first, tap} from 'rxjs/operators';



@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) { }

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
        return (courses).find((course) => course.id === id);
      })
    );
  }
}
