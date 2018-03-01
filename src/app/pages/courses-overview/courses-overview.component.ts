import { Component, OnInit } from '@angular/core';
import {Course} from "../../model/course";
import {CoursesService} from "../../services/courses/courses.service";

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.css']
})
export class CoursesOverviewComponent implements OnInit {

  title = "Datenspaziergang";
  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  private getCourses() {
    this.coursesService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  ngOnInit() {
    this.getCourses();
  }

}
