import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Station, Subject} from '../../../model/stations';
import {CoursesService} from '../../../services/courses/courses.service';
import {environment} from '../../../../environments/environment';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';
import {MapboxService} from '../../../services/mapbox/mapbox.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
        transform: 'translate3d(-43%, 0, 0)'
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
  location: Point;
  title: string;

  lineData =  [
    [13.419347, 52.497136],
    [13.419111, 52.498912],
    [13.423489, 52.499173]
  ];

  mapOptions = {
    style: environment.mapboxTiles.street,
    center: [13.390497, 52.517221],
    container: `map0`,
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

    this.mapboxService.getRoute().subscribe((res) => {
      console.log(res);
    });

    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;

      this.station = this.course.stations.find((station) => station.id === station_id);
      this.station.subjects = this.station.subjects.map(subject => {
        const firstpage = subject.pages.find(page => page.id === subject.entry);
        subject['link'] = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${subject.id}/${firstpage.id}`;
        return subject;
      });
      this.mapOptions.center = [this.station.position.lon, this.station.position.lat];
      console.log(this.station);
      this.title = `${course.name}: ${this.station.name}`;

      //
      // this.nextLink = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${firstpage.id}`;
      this.coursesService.getNextStationLink(course_id, station_id).subscribe((nextStation) => {
        this.nextLink = nextStation;
      });
      // this.nextLink = `/subjects/${this.course.id}/${this.station.id}`;
    });
  }

  toggleSwipeState() {
    console.log('hey');
    this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
  }
}
