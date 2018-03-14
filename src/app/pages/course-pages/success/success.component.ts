import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Stations} from '../../../model/stations';
import SuccessStation = Stations.SuccessStation;
import {Course} from '../../../model/course';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  course: Course;
  station: SuccessStation;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;
      this.station = <SuccessStation>this.course.stations.find((station) => station.id === station_id);
    });
  }

}
