import {Component, OnInit} from '@angular/core';
import {Station} from '../../../model/stations';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';

@Component({
  selector: 'app-op-debate',
  templateUrl: './op-debate.component.html',
  styleUrls: ['./op-debate.component.scss']
})
export class OpDebateComponent implements OnInit {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  nextLink: string;
  station: Station;
  course: Course;

  ngOnInit() {

    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');
    const subject_id = +this.route.snapshot.paramMap.get('subject');
    const page_id = +this.route.snapshot.paramMap.get('page');

    this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {

      this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
        this.nextLink = nextPage;
      });
    });
  }
}
