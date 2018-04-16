import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tree-dashboard',
  templateUrl: './tree-dashboard.component.html',
  styleUrls: ['./tree-dashboard.component.scss']
})
export class TreeDashboardComponent implements OnInit {

  nextLink: string;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');
    const subject_id = +this.route.snapshot.paramMap.get('subject');
    const page_id = +this.route.snapshot.paramMap.get('page');
    this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
      console.log(page);

      this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
        this.nextLink = nextPage;
      });
    });
  }

}
