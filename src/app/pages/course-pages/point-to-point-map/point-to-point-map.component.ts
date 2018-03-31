import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';
import {Station} from '../../../model/stations';


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
  station: Station;
  line: number[][];
  location: Point;
  title: string;

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
    const station_id = +this.route.snapshot.paramMap.get('station');
    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;

      this.station = this.course.stations.find((station) => station.id === station_id);
      this.mapOptions.center = [this.station.position.lon, this.station.position.lat];
      console.log(this.station);

      this.title = `Nächste Station: ${this.station.title}`;

      if (navigator.geolocation) {
        console.log('start requesting geolocation');
        navigator.geolocation.getCurrentPosition((current_location) => {
          console.log(current_location);
          this.location = {lon: current_location.coords.longitude, lat: current_location.coords.latitude};
          this.line = [[this.station.position.lon, this.station.position.lat], [this.location.lon, this.location.lat]];
        });
      } else {
        console.log('no navigator object found');
      }


      const firstpage = this.station.pages.find(page => page.id === this.station.entry);
      this.nextLink = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${firstpage.id}`;
    });

  }
}
