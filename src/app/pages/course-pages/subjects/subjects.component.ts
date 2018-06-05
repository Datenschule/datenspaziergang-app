import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Station, Subject} from '../../../model/stations';
import {CoursesService} from '../../../services/courses/courses.service';
import {environment} from '../../../../environments/environment';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';
import {MapboxService} from '../../../services/mapbox/mapbox.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as turf from '@turf/turf';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
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
export class SubjectsComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private mapboxService: MapboxService) {
  }

  swipeState = 'left';

  nextLink: string;
  course: Course;
  station: Station;
  line: [number, number];
  location: Point;
  locationMarker: Array<number>;
  title: string;

  mapOptions = {
    style: environment.mapboxTiles.street,
    center: [13.390497, 52.517221],
    container: `map0`,
    marker: [13.390497, 52.517221],
    zoom: [16],
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
    const station_id = +this.route.snapshot.paramMap.get('station');

    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;
      this.station = this.course.stations.find((station) => station.id === station_id);
      this.line = this.course.courseline[this.station['line']];

      this.station.subjects = this.station.subjects.map(subject => {
        const firstpage = subject.pages.find(page => page.id === subject.entry);
        subject['link'] = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${subject.id}/${firstpage.id}`;
        return subject;
      });
      // move center slightly to the right
      let oldCenter = turf.point([this.station.position.lon, this.station.position.lat]);
      let newCenter = turf.transformTranslate(oldCenter, -0.2, 90)
      this.mapOptions.center = newCenter.geometry.coordinates;
      this.mapOptions.marker = [this.station.position.lon, this.station.position.lat];
      this.title = `${course.name}: ${this.station.id}. ${this.station.name}`;

      this.coursesService.getNextStationLink(course_id, station_id).subscribe((nextStation) => {
        this.nextLink = nextStation;
      });
    });
  }

  toggleSwipeState() {
    this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
  }
}
