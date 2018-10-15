import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {StoryPage, Station} from '../../../model/stations';
import {animate, style, transition, trigger} from '@angular/animations';
import {control} from 'leaflet';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  animations: [trigger('fadeInAnimation', [
    transition('* => enter', [
      style({transform: 'scale(0.1)'}),
      animate('.3s', style({ transform: 'scale(1)' }))
    ]),
    transition('* => leave', [
      style({transform: 'scale(1)'}),
      animate('.15s', style({ transform: 'scale(0.05)' }))
    ]),
  ])],
})
export class StoryComponent implements OnInit {
  nextLink: string;
  image: SafeStyle;
  title: string;
  inlineTitle: boolean = false;
  story: any;
  state: string;
  station: Station;
  courseId: number;
  actionbarTitle: string;
  subject: any;
  @ViewChild("wrapper") wrapper: ElementRef;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const course_id = +params['course'];
      const station_id = +params['station'];
      const subject_id = +params['subject'];
      const page_id = +params['page'];

      this.coursesService.getCourse(course_id).subscribe((course) => {
        if (course.status === 'success') {
          this.station = course.data.walk.stations.find((station) => station.id === station_id);
          this.subject = this.station.subjects.find((subject) => subject.id === subject_id);
          this.actionbarTitle = `${this.station.id}. ${this.station.name}`;
        }
      });

      this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
        this.title = `${page.name}`;
        if (!page.prev) {
          this.state = 'enter';
        }
        this.courseId = course_id;
        this.story = page;
        this.image = this.sanitizer.bypassSecurityTrustStyle(`url(${page.img})`);
        this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
          this.nextLink = nextPage;
        });
      });
    });
  }

  goNext() {
    if (this.nextLink.startsWith('/story') && this.wrapper) {
      this.wrapper.nativeElement.scrollTop = 0;
    }
    console.log(this.nextLink);
    if (this.nextLink.startsWith('/subject')) {
      this.state = 'leave';
      // this.router.navigate([link]);
    } else {
      this.router.navigate([this.nextLink]);
    }
  }

  animationDone(event) {
    if (event.toState === 'leave') {
      console.log('animation done');
      console.log(event);
      this.router.navigate([this.nextLink]);
    }
  }

  goBack() {
    this.location.back();
  }
}
