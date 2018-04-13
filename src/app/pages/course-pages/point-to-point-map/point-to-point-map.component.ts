import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';
import {Station} from '../../../model/stations';
import { environment } from '../../../../environments/environment';
import {MapboxService} from '../../../services/mapbox/mapbox.service';


@Component({
  selector: 'app-point-to-point-map',
  templateUrl: './point-to-point-map.component.html',
  styleUrls: ['./point-to-point-map.component.css']
})
export class PointToPointMapComponent implements OnInit {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private mapboxService: MapboxService) {
  }

  nextLink: string;
  course: Course;
  points: Point[];
  image = '/assets/images/pin.jpeg';
  station: Station;
  line: number[][];
  location: Point;
  locationMarker: Array<number> = [];
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
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');

    this.mapboxService.getRoute().subscribe((res) => {
      console.log(res);
    });

    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;

      this.station = this.course.stations.find((station) => station.id === station_id);
      this.mapOptions.center = [this.station.position.lon, this.station.position.lat];
      console.log(this.station);

      this.title = `${course.name}: ${this.station.name}`;

      if (navigator.geolocation) {
        console.log('start requesting geolocation');
        navigator.geolocation.watchPosition((current_location) => {
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


      const firstpage = this.station.pages.find(page => page.id === this.station.entry);
      // this.nextLink = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${firstpage.id}`;
      this.nextLink = `/subjects/${this.course.id}/${this.station.id}`;
    });

  }
}
