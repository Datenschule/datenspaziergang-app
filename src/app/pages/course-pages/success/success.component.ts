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

  message = "Vielen Dank, dass du an unseren Datenspaziergang durch Berlin-Kreuzberg teilgenommen hast! Wir hoffen es hat dir gefallen!\n";
  title = "Abschluss";

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }
}
