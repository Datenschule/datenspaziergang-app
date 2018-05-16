import {Component, OnInit} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/courses/courses.service';
import {environment} from '../../../environments/environment';
import * as turf from '@turf/turf';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.scss'],
  animations: [
    trigger('swiping', [
      state('left', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('right', style({
        transform: 'translate3d(-99%, 0, 0)'
      })),
      transition('left => right', animate('200ms ease-in-out')),
      transition('right => left', animate('200ms ease-in-out'))
    ])
  ]
})
export class CoursesOverviewComponent implements OnInit {

  title = 'Touren';
  courses: Course[];
  activeCourse: Course;
  activeLine: any;

  swipeState = 'left';

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
    center = turf.transformTranslate(center, -0.8, 90);
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

  toggleSwipeState() {
    this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
  }
}
