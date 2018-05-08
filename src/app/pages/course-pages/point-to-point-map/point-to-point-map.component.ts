import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';
import {Station} from '../../../model/stations';
import { environment } from '../../../../environments/environment';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  stationNameInline: boolean = false;
  line: number[][];
  location: Point;
  locationMarker: Array<number> = [];
  title: string;
  stationsForIndicator: Array<Station>;

  mapOptions = {
    style: environment.mapboxTiles.street,
    center: [13.390497, 52.517221],
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
      const subject_id = +params['subject'];
      const page_id = +params['page'];
      const p2p = +params['point-to-point'];

      const course_id = +this.route.snapshot.paramMap.get('course');
      const station_id = +this.route.snapshot.paramMap.get('station');

      this.coursesService.getCourse(course_id).subscribe((course) => {

        this.course = course;
        this.stationsForIndicator = this.course.stations;

        this.station = this.course.stations.find((station) => station.id === station_id);

        if (this.station.name.length > 20) {
          this.stationNameInline = true;
        }

        this.mapOptions.center = [this.station.position.lon, this.station.position.lat];
        console.log(this.station);

        this.title = `${course.name} | ${station_id + 1}. Station:  ${this.station.name}`;

        if (navigator.geolocation) {
          console.log('start requesting geolocation');
          navigator.geolocation.getCurrentPosition((current_location) => {
            console.log(current_location);

            // this.location = {lon: current_location.coords.longitude, lat: current_location.coords.latitude};
            this.locationMarker = [current_location.coords.longitude, current_location.coords.latitude];
            console.log(this.locationMarker);
            // this.line = [[this.station.position.lon, this.station.position.lat], [this.location.lon, this.location.lat]];
          }, (error) => {
            console.log(error, " did not get user permission");
          });
        } else {
          console.log('no navigator object found');
        }


        // const firstpage = this.station.pages.find(page => page.id === this.station.entry);
        // this.nextLink = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${firstpage.id}`;
        this.nextLink = `/subjects/${this.course.id}/${this.station.id}`;
      });
    });
  }

  toggleSwipeState() {
    this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
  }
}
