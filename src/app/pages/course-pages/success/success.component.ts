import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';

import {Course} from '../../../model/course';
import {Station} from '../../../model/stations';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  course: Course;
  station: Station;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;
      this.station = this.course.stations.find((station) => station.id === station_id);
    });
  }

}
