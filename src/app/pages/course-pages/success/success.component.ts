import {Component, OnInit} from '@angular/core';
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

  message = "Herzlichen Glückwunsch, besuchen uns auf datenschule.de für unsere Workshops";
  title = "Abschluss";

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }
}
