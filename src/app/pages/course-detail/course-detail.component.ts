import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../model/course";
import {CoursesService} from "../../services/courses/courses.service";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
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
      this.entryLink = `/overview-map/${this.course.id}`;
    });
  }

}