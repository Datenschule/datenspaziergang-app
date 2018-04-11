import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import {Course} from '../../../model/course';
import {Station} from '../../../model/stations';

@Component({
  selector: 'app-overview-map',
  templateUrl: './overview-map.component.html',
  styleUrls: ['./overview-map.component.css']
})
export class OverviewMapComponent implements OnInit {

  map: mapboxgl.Map;
  image = '/assets/images/pin.jpeg';
  line = [[13.390497, 52.518321, 49], [13.390521, 52.51815, 48], [13.390688, 52.517271, 43.1], [13.39068, 52.51723, 42.7], [13.390703, 52.517122, 42.3], [13.392561, 52.517235, 39.4], [13.392584, 52.517118, 39.3], [13.393054, 52.517149, 39.1], [13.393172, 52.517192, 39.2], [13.393289, 52.517222, 39.3], [13.393364, 52.517227, 39.3], [13.393385, 52.517089, 39.3], [13.394184, 52.517141, 39], [13.394233, 52.516831, 38.6], [13.394358, 52.516045, 36.3], [13.394367, 52.515986, 36.2], [13.394171, 52.515955, 36.2], [13.393571, 52.515912, 36.2], [13.393495, 52.515906, 36.1], [13.393164, 52.515884, 36.4], [13.393034, 52.515888, 36.5], [13.392887, 52.51588, 36.6], [13.392927, 52.515624, 37], [13.393033, 52.514997, 38.9], [13.393129, 52.514432, 41], [13.393179, 52.514104, 41.9], [13.394314, 52.514145, 43.4], [13.393179, 52.514104, 44.3], [13.393092, 52.514098, 44.2], [13.392478, 52.514057, 43.8], [13.391333, 52.513979, 43.6], [13.391248, 52.513974, 43.5], [13.391388, 52.513118, 43.2], [13.391442, 52.512801, 43.4], [13.391388, 52.513118, 43.5], [13.391248, 52.513974, 43.5], [13.390523, 52.513928, 43.6], [13.389337, 52.513854, 43.3], [13.388208, 52.513782, 42.9], [13.386962, 52.513702, 42.7], [13.386368, 52.51367, 42.4], [13.386293, 52.514122, 41.9], [13.386209, 52.51457, 41.4], [13.385703, 52.51453, 40.8], [13.386209, 52.51457, 39], [13.386158, 52.514868, 39], [13.38612, 52.515087, 38.8], [13.386106, 52.515165, 38.8], [13.386057, 52.515451, 38.6], [13.387619, 52.515556, 38.8], [13.387547, 52.516025, 39.2], [13.387619, 52.515556, 40.5], [13.386057, 52.515451, 39.5], [13.385972, 52.515896, 39.2], [13.385894, 52.516325, 38.7], [13.385854, 52.516522, 38.5], [13.385846, 52.51656, 38.4], [13.385821, 52.516671, 38.2], [13.386007, 52.516685, 38.3], [13.385973, 52.516886, 38.5], [13.385958, 52.516976, 38.6], [13.386016, 52.51698, 38.7], [13.387006, 52.517049, 39.9], [13.388066, 52.517123, 44], [13.388057, 52.517173, 44.1], [13.388046, 52.517231, 44.2], [13.38802, 52.517373, 44.3], [13.38799, 52.517529, 44.3], [13.387968, 52.517647, 44.2], [13.38794, 52.517799, 44.2], [13.387919, 52.517912, 44.2], [13.387908, 52.517983, 44.2], [13.388643, 52.518027, 44.5], [13.388544, 52.518716, 43], [13.388611, 52.518785, 42.5], [13.388625, 52.518882, 41.9], [13.388592, 52.519069, 40.8], [13.388622, 52.51907, 40.3], [13.388627, 52.519075, 39.8], [13.388627, 52.519075, 39.3], [13.388627, 52.519075, 34], [13.388622, 52.51907, 34], [13.388592, 52.519069, 34], [13.388625, 52.518882, 34], [13.388611, 52.518785, 34], [13.388544, 52.518716, 34], [13.388855, 52.518711, 34], [13.390091, 52.518793, 38.3], [13.390236, 52.518824, 38.9], [13.390371, 52.518879, 39.5], [13.390416, 52.518908, 40.4], [13.390419, 52.518887, 41.2], [13.390497, 52.518321, 46]];
  lineId = 'line-0';
  activeWaypoint = 0;
  nextLink: string;
  course: Course;
  stations: Station[];

  mapOptions = {
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [13.390497, 52.517221],
    container: `map0`,
    zoom: [14],
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

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {
      this.course = course;
      this.stations = this.course.stations;

      var features = turf.featureCollection(
        this.stations.map(station => turf.point([station.position.lon, station.position.lat]))
      );

      var center = turf.center(features);
      this.line = this.stations.reduce((prev, curr) => { console.log(prev); prev.push([curr.position.lon, curr.position.lat]); return prev;}, []);
      // console.log();

      this.mapOptions.center = center.geometry.coordinates;
      this.nextLink = `/point-to-point/${course_id}/${this.course.entry}`;
    });
  }
}
