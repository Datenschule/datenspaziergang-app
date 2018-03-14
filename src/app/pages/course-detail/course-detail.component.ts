import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../model/course";
import {CoursesService} from "../../services/courses/courses.service";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  title = "Detail";
  course: Course;
  entryLink: string;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(id).subscribe((course) => {
      console.log('fetched course!!!!');
      console.log(course);
      this.course = course;
      // this.coursesService.getRouteForStation(this.course.stations[this.course.entry]);
      this.entryLink = `/${this.course.stations[this.course.entry].type}/${this.course.id}/${this.course.entry}`;
    });
  }

}
