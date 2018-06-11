import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../../services/courses/courses.service';
import {DomSanitizer, SafeResourceUrl, SafeStyle} from '@angular/platform-browser';
import {Location} from '@angular/common';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  title: string;
  link: SafeResourceUrl;
  text: string;
  class: string;
  nextLink: string;
  stationId: number;
  courseId: number;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const course_id = +params['course'];
      const station_id = +params['station'];
      const subject_id = +params['subject'];
      const page_id = +params['page'];

      this.stationId = station_id;
      this.courseId = course_id;

      this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {

        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(page.link);
        this.title = page.name;
        this.class = page.class;
        this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
          this.nextLink = nextPage;
        });
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
