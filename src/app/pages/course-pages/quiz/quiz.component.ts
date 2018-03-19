import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Stations} from '../../../model/stations';
import QuizStation = Stations.QuizStation;
import {Course} from '../../../model/course';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  station: QuizStation;
  nextLink: string;
  correct = false;
  firstguess = false;
  course: Course;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const page_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {
      this.course = course;
      this.station = course.stations.find((station) => station.id === page_id);

      const nextStation = course.stations.find((station) => station.id === this.station.next);
      this.nextLink = `/${nextStation.type}/${course.id}/${nextStation.id}`;
    });
  }

  sendanswer(answer) {
    this.firstguess = true;
    console.log(`clicked option ${answer}`);
    if (answer === this.station.correct) { this.correct = true; }
  }

}
