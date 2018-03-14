import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ComponentModel} from '../../../model/component-model';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course';
import {Point} from '../../../model/point';
import {Stations} from '../../../model/stations';
import PointToPointStation = Stations.PointToPointStation;
import Station = Stations.Station;

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
  station: PointToPointStation;
  line: number[][];

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
    const station_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;

      this.station = <PointToPointStation>this.course.stations.find((station) => station.id === station_id);
      this.line = [[this.station.start.lat, this.station.start.lon], [this.station.finish.lat, this.station.finish.lon]];

      let nextStation = this.course.stations.find(station => station.id === this.station.next);
      this.nextLink = `/${nextStation['type']}/${this.course.id}/${nextStation.id}`;
    });

  }
}
