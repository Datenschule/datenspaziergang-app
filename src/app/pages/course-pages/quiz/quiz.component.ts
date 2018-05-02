import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
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
  question: string;
  answers: string[];
  correct_answer: number;
  correct_message = 'Glückwunsch';
  wrong_message = 'Falsch';

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(val => {
      const course_id = +this.route.snapshot.paramMap.get('course');
      const station_id = +this.route.snapshot.paramMap.get('station');
      const subject_id = +this.route.snapshot.paramMap.get('subject');
      const page_id = +this.route.snapshot.paramMap.get('page');
      this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {

        this.title = page.name;
        this.question = page.question;
        this.answers = page.answers;
        this.correct_answer = page.correct;

        this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
          this.nextLink = nextPage;
        });
      });
    });
  }

  sendanswer(answer) {
    this.firstguess = true;
    console.log(`clicked option ${answer}`);
    this.correct = answer === this.correct_answer;
  }

  goBack() {
    this.location.back();
  }
}
