import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ComponentModel} from '../../../model/component-model';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';

@Component({
  selector: 'app-point-to-point-map',
  templateUrl: './point-to-point-map.component.html',
  styleUrls: ['./point-to-point-map.component.css']
})
export class PointToPointMapComponent implements OnInit {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  nextLink: string;
  course: Course;
  points: Point[];
  image = '/assets/images/pin.jpeg';

  mapOptions = {
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [13.390497, 52.517221],
    container: `map0`,
    zoom: 15,
    hash: false,
    interactive: true,
    index: 0,
    bearingSnap: 7,
    pitchWithRotate: true,
    logoPosition: 'bottom-left',
    classes: [],
    attributionControl: true,
    failIfMajorPerformanceCaveat: false,
    preserveDrawingBuffer: false,
    refreshExpiredTiles: true,
    maxBounds: undefined,
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    trackResize: true,
    bearing: 0,
    pitch: 0,
    renderWorldCopies: true
  };

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const page_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;
      console.log(course);

      const pageData = course.pages.find((page) => page.id === page_id);
      this.points = pageData.data['points'];

      const nextType = course.pages.find((page) => page.id === pageData.next).type;
      this.nextLink = `/${nextType}/${course.id}/${pageData.next}`;
    });

  }
}
