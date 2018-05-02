import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {StoryPage} from '../../../model/stations';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  nextLink: string;
  image: SafeStyle;
  title: string;
  inlineTitle: boolean = false;
  story: any;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const course_id = +params['course'];
      const station_id = +params['station'];
      const subject_id = +params['subject'];
      const page_id = +params['page'];

      this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {

        this.title = `${page.name}`;
        if (this.title.length > 20) {
          this.inlineTitle = true;
        }
        this.story = page;
        this.image = this.sanitizer.bypassSecurityTrustStyle(`url(${page.img})`);
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
