import {Component, AfterViewChecked, OnInit, ViewChild, ElementRef} from '@angular/core';
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

    // route 'enter' transition
    transition('* => enter', [
      // css styles at start of transition
      // style({ opacity: 0 }),
      style({transform: 'scale(0.1)'}),

      // animation and styles at end of transition
      animate('.3s', style({ transform: 'scale(1)' }))
    ]),
    // route 'enter' transition
    transition('* => leave', [
      // css styles at start of transition
      // style({ opacity: 0 }),
      style({transform: 'scale(1)'}),

      // animation and styles at end of transition
      animate('.3s', style({ transform: 'scale(0.1)' }))
    ]),
  ])],
})
export class StoryComponent implements OnInit, AfterViewChecked {
  nextLink: string;
  image: SafeStyle;
  title: string;
  inlineTitle: boolean = false;
  story: any;
  state: string;
  station: Station;
  courseId: number;
  actionbarTitle: string;
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

      // this.state = 'unenter';
      // this.state = "enter";

      //this.coursesService.getCourse(course_id)
      this.coursesService.getCourse(course_id).subscribe((course) => {
        this.station = course.stations.find((station) => station.id === station_id);
        this.actionbarTitle = `${this.station.id + 1}. ${this.station.name}`;
      });


      this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
        console.log(page);
        this.title = `${page.name}`;
        if (!page.prev) {
          this.state = 'enter';
          console.log('set state to enter');
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

  ngAfterViewChecked() {
    console.log('fire');
    if (this.wrapper && this.wrapper.nativeElement) {
      console.log(this.wrapper.nativeElement.scrollTop);
      this.wrapper.nativeElement.scollTop = 0;
      console.log(this.wrapper.nativeElement.scrollTop);
    }
  }

  goNext() {
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
