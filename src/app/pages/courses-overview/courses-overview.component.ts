import {Component, OnInit} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/courses/courses.service';
import {environment} from '../../../environments/environment';
import * as turf from '@turf/turf';

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.scss']
})
export class CoursesOverviewComponent implements OnInit {

  title = 'Touren';
  courses: Course[];
  activeCourse: Course;
  activeLine: any;

  mapOptions = {
    style: environment.mapboxTiles.street,
    zoom: [14],
    center: [13.40497, 52.517221]
  };

  constructor(private coursesService: CoursesService) {
  }

  private getCourses() {
    this.coursesService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
        console.log(courses);
        this.updateCourse(courses[0]);
        // console.log();
      });
  }

  public updateCourse(course) {
    this.activeCourse = course;
    var features = turf.featureCollection(
      this.activeCourse.stations.map(station => turf.point([station.position.lon, station.position.lat]))
    );

    var center = turf.center(features);
    center = turf.transformTranslate(center, -1, 90);
    console.log(center);
    this.mapOptions.center = center.geometry.coordinates;
    this.activeLine = this.activeCourse.stations.reduce((prev, curr) => {
      console.log(prev);
      prev.push([curr.position.lon, curr.position.lat]);
      return prev;
    }, []);
    //this.activeLine = course['courseline'];
  }

  ngOnInit() {
    this.getCourses();
  }

}
