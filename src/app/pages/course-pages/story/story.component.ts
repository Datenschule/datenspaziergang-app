import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {Stations} from '../../../model/stations';
import StoryStation = Stations.StoryStation;

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  nextLink: string;
  station: StoryStation;
  course: Course;
  image: SafeStyle;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;
      this.station = <StoryStation>this.course.stations.find((station) => station.id === station_id);
      let nextStation = course.stations.find((station) => station.id === this.station.next);
      console.log(nextStation);
      this.nextLink = `/${nextStation.type}/${course.id}/${nextStation.id}`;
      this.image = this.image = this.sanitizer.bypassSecurityTrustStyle(`url(${this.station.img})`);
    });
  }
}
