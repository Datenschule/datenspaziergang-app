import {Component, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Course} from "../../model/course";
import {tap} from "rxjs/operators";
import {Waypoint} from '../../model/waypoint';
import {PageItem} from '../../model/page-item';
import {CourseMapComponent} from '../../pages/course-map/course-map.component';
import {map} from 'rxjs/operator/map';
import {PageComponent} from '../../model/page-component';
import {OverviewMapComponent} from '../../components/page-components/overview-map-component/overview-map.component';
import {ComponentModel} from '../../model/component-model';
import {PointToPointMapComponent} from '../../components/page-components/point-to-point-map-component/point-to-point-map.component';
import {QuizComponent} from '../../components/page-components/quiz-component/quiz-component';
import {StoryComponent} from '../../components/page-components/story-component/story.component';
import {SuccessComponent} from '../../components/page-components/success-component/success.component';
import {ErrorComponent} from '../../components/page-components/error/error.component';

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
      tap(course => {
        course.pageComponents = course.pages.map(page => {
          return this.getComponentForCourseWaypoint(page);
        });
        console.log(course);
        return course;
      })
    );
  }

  private getComponentForCourseWaypoint(page: ComponentModel): PageItem {
    switch (page.name) {
      case "OverviewMapComponent":
        return new PageItem(OverviewMapComponent, page.data);
      case "PointToPointMapComponent":
        return new PageItem(PointToPointMapComponent, page.data);
      case "QuizComponent":
        return new PageItem(QuizComponent, page.data);
      case "StoryComponent":
        return new PageItem(StoryComponent, page.data);
      case "SuccessComponent":
        return new PageItem(SuccessComponent, page.data);
      default:
        console.error("No matching Page Component found");
        return new PageItem(ErrorComponent, {});
    }
  }
}
