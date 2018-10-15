import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';

import {Course} from '../../../model/course';
import {Station} from '../../../model/stations';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  message = "";
  title = "Abschluss";
  course: Course;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    this.coursesService.getCourse(course_id).subscribe((course) => {
      if (course.status === 'success') {
        this.course = course.data.walk;
        this.title = `Abschluss ${this.course.name}`;
        this.message = `Vielen Dank, dass du am Datenspaziergang  ${this.course.name} durch ${this.course.location} teilgenommen hast! Wir hoffen es hat dir gefallen!`
      }
    });
  }
}
