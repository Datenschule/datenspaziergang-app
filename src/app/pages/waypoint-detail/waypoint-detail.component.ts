import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/courses/courses.service';
import {Waypoint} from '../../model/waypoint';

@Component({
  selector: 'app-waypoint-detail',
  templateUrl: './waypoint-detail.component.html',
  styleUrls: ['./waypoint-detail.component.css']
})
export class WaypointDetailComponent implements OnInit {

  course: Course;
  waypoint: Waypoint;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {
  }

  ngOnInit() {
    const waypointId = +this.route.snapshot.paramMap.get('waypoint');
    const courseId = +this.route.snapshot.paramMap.get('course');
    this.coursesService.getCourse(courseId).subscribe(course => {
      this.course = course;
      this.waypoint = course.points[waypointId];
    });
  }

  nextWaypoint() {
    this.waypoint = this.course.points.find((point) => point.id === this.waypoint.next);
  }

  prevWaypoint() {
    this.waypoint = this.course.points.find((point) => point.id === this.waypoint.prev);
  }

}
