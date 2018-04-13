import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../../services/courses/courses.service';
import {DomSanitizer, SafeResourceUrl, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  title: string;
  link: SafeResourceUrl;
  text: string;
  nextLink: string;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const course_id = +params['course'];
      const station_id = +params['station'];
      const subject_id = +params['subject'];
      const page_id = +params['page'];


      this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {

        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(page.link);
        this.text = page.content;
        this.title = page.name;
        this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
          this.nextLink = nextPage;
        });
      });
    });
  }

}
