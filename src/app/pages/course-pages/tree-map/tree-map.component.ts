import {Component, OnInit} from '@angular/core';
import {TreeBerlinService} from '../../../services/plugins/tree-berlin.service';
import {Stations} from '../../../model/stations';
import BerlinTreeStation = Stations.BerlinTreeStation;
import {CoursesService} from '../../../services/courses/courses.service';
import {Course} from '../../../model/course';
import {ActivatedRoute} from '@angular/router';

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

  ngOnInit() {
    this.treeService.getTreesByAdress('Görlitzer Park').subscribe((trees) => console.log(trees));

    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('id');

    this.coursesService.getCourse(course_id).subscribe((course) => {

      this.course = course;

      this.station = <BerlinTreeStation>this.course.stations.find((station) => station.id === station_id);
      console.log(this.station);
      let nextStation = this.course.stations.find(station => station.id === this.station.next);
      this.nextLink = `/${nextStation['type']}/${this.course.id}/${nextStation.id}`;

    });
  }

}
