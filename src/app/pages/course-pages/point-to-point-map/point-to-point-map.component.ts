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
        transform: 'translate3d(-92%, 0, 0)'
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
  stationNameInline = false;
  line: number[][];
  location: Point;
  locationMarker: Array<number> = [];
  title: string;
  currentStationMarker: number[];
  prevStationMarker: number[];

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

        this.station = this.course.stations.find((station) => station.id === station_id);
        this.stationNameInline = this.station.name.length > 20;

        // this.mapOptions.center = [this.station.position.lon, this.station.position.lat];

        this.title = `${course.name} | ${station_id + 1}. Station:  ${this.station.name}`;
        this.line = course.courseline[this.station['line']];
        console.log(this.line);

        let translatedCenter = turf.transformTranslate(turf.point([this.station.position.lon, this.station.position.lat]), -0.5, 90);
        this.mapOptions.center = translatedCenter.geometry.coordinates;
        this.currentStationMarker = [this.station.position.lon, this.station.position.lat];

        let prevStation = this.course.stations[this.station['prev']];
        if (prevStation) {
          this.prevStationMarker = [prevStation.position.lon, prevStation.position.lat];
        }


        this.findUserLocation();
        this.nextLink = `/subjects/${this.course.id}/${this.station.id}`;
      });
    });
  }

  private findUserLocation() {
    if (navigator.geolocation) {
      console.log('start requesting geolocation');
      navigator.geolocation.getCurrentPosition((current_location) => {
        this.locationMarker = [current_location.coords.longitude, current_location.coords.latitude];
      }, (error) => {
        console.log(error, ' did not get user permission');
      });
    } else {
      console.log('no navigator object found');
    }
  }

  toggleSwipeState() {
    this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
  }
}
