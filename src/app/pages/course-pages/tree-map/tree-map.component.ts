import {Component, OnInit} from '@angular/core';
import {TreeBerlinService} from '../../../services/plugins/tree-berlin.service';
import {Stations} from '../../../model/stations';
import BerlinTreeStation = Stations.BerlinTreeStation;
import {CoursesService} from '../../../services/courses/courses.service';
import {Course} from '../../../model/course';
import {ActivatedRoute} from '@angular/router';
import {Point} from '../../../model/point';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css']
})
export class TreeMapComponent implements OnInit {

  constructor(private treeService: TreeBerlinService, private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  nextLink: string;
  course: Course;
  station: BerlinTreeStation;
  trees: Point[];
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
    const station_id = +this.route.snapshot.paramMap.get('id');

    this.trees = [];

    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;


      this.station = <BerlinTreeStation>this.course.stations.find((station) => station.id === station_id);
      console.log(this.station);
      let nextStation = this.course.stations.find(station => station.id === this.station.next);
      this.nextLink = `/${nextStation['type']}/${this.course.id}/${nextStation.id}`;

      this.treeService.getTreesByAdress('Görlitzer Park').subscribe((trees) => {
        for (let feature of trees.features) {
          this.trees.push({lat: feature.geometry.coordinates[0], lon: feature.geometry.coordinates[1]});
        }
        console.log(this.trees);
      });

    });
  }

}
