import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/courses/courses.service';
import {environment} from '../../../environments/environment';
import * as turf from '@turf/turf';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
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
export class CourseDetailComponent implements OnInit {
  title = "Tourdetail";
  activeCourse: Course;
  activeLine: any;

  swipeState = 'left';

  mapOptions = {
    style: environment.mapboxTiles.street,
    zoom: [14],
    center: [13.40497, 52.517221]
  };

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const course_id = +params['id'];

      this.coursesService.getCourse(course_id).subscribe((course) => {
        if (course.status === 'success') {
          this.activeCourse = course.data.walk;
          this.title = `Tourdetail ${this.activeCourse.name}`;

          let features = turf.featureCollection(
            this.activeCourse.stations.map(station => turf.point([station.position.lon, station.position.lat]))
          );

          let center = turf.center(features);
          center = turf.transformTranslate(center, -0.8, 90);
          this.mapOptions.center = center.geometry.coordinates;
          this.activeLine = this.activeCourse.stations.reduce((prev, curr) => {
            console.log(prev);
            prev.push([curr.position.lon, curr.position.lat]);
            return prev;
          }, []);
        }
      });
    })
  }

  toggleSwipeState() {
    this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
  }
}
