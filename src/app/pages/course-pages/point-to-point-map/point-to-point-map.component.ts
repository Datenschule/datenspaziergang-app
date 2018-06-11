import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';
import {Station} from '../../../model/stations';
import {environment} from '../../../../environments/environment';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as turf from '@turf/turf';

@Component({
  selector: 'app-point-to-point-map',
  templateUrl: './point-to-point-map.component.html',
  styleUrls: ['./point-to-point-map.component.scss'],
  animations: [
    trigger('swiping', [
      state('left', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('right', style({
        transform: 'translate3d(-99%, 0, 0)'
      })),
      transition('left => right', animate('200ms ease-in-out')),
      transition('right => left', animate('200ms ease-in-out'))
    ])
  ]
})
export class PointToPointMapComponent implements OnInit {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  swipeState = 'left';
  nextLink: string;
  course: Course;
  points: Point[];
  station: Station;
  line: [number, number];
  pastlines: any;
  location: Point;
  locationMarker: Array<number> = [];
  title: string;

  mapOptions = {
    style: environment.mapboxTiles.street,
    center: [13.390497, 52.517221],
    marker: [13.390497, 52.517221],
    container: `map0`,
    zoom: [15],
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

    this.route.params.subscribe((params) => {

      const course_id = +params['course'];
      const station_id = +params['station'];

      this.coursesService.getCourse(course_id).subscribe((course) => {

        this.course = course;
        this.station = course.stations.find((station) => station.id === station_id);

        this.title = `${this.course.name}: ${this.station.id}. ${this.station.name}`;
        this.line = this.course.courseline[this.station['line']];

        let foo = [];
        foo.push([]); // make sure template loop always works
        for (let i = 0; i < this.station['line']; i++) {
          foo.push(this.course.courseline[i]);
        }
        this.pastlines = foo;

        let translatedCenter = turf.transformTranslate(turf.point([this.station.position.lon, this.station.position.lat]), -0.5, 90);
        this.mapOptions.center = translatedCenter.geometry.coordinates;

        this.nextLink = `/subjects/${this.course.id}/${this.station.id}`;
      });
    });
  }

  toggleSwipeState() {
    this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
  }
}
