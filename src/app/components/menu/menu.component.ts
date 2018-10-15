import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/courses/courses.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses()
      .subscribe(response => {
        if (response.status === 'success') {
          this.courses = response.data.walks;
        }
      });
  }
}
