import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../../model/course';
import {Station} from '../../../model/stations';
import {Location} from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  nextLink: string;
  correct = false;
  firstguess = false;

  title: string;
  stationId: number;
  courseId: number;
  question: string;
  answers: Array<[string, boolean, string]>;
  correct_answer: number;
  correct_message = 'Glückwunsch';
  wrong_message = 'Falsch';
  @ViewChild("wrapper") wrapper: ElementRef;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(val => {
      const course_id = +this.route.snapshot.paramMap.get('course');
      const station_id = +this.route.snapshot.paramMap.get('station');
      const subject_id = +this.route.snapshot.paramMap.get('subject');
      const page_id = +this.route.snapshot.paramMap.get('page');
      this.stationId = station_id;
      this.courseId = course_id;

      this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
        this.title = page.name;
        this.question = page.question;
        this.correct_answer = page.correct;
        this.answers = page.answers.map((answer, i) => {
          let wasPressed = false;
          let isCorrect = i === this.correct_answer ? true : false;
          return [answer, wasPressed, isCorrect];
        });

        this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
          this.nextLink = nextPage;
        });
      });
    });
  }

  sendanswer(answer) {
    this.firstguess = true;
    this.answers[answer][1] = true;
    this.correct = answer === this.correct_answer;
  }

  goBack() {
    this.location.back();
  }

  goNext() {
    if (this.nextLink.startsWith('/quiz')) {
      this.wrapper.nativeElement.scrollTop = 0;
    }
    this.router.navigate([this.nextLink]);
  }
}
