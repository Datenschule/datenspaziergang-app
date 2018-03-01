import { Component, OnInit, Input } from '@angular/core';
import {Waypoint} from "../../model/waypoint";
import {Course} from '../../model/course';

@Component({
  selector: 'app-waypoint-info',
  templateUrl: './waypoint-info.component.html',
  styleUrls: ['./waypoint-info.component.css']
})
export class WaypointInfoComponent implements OnInit {

  @Input() waypointId: number;
  @Input() course: Course;

  activeWaypoint: Waypoint;

  constructor() { }

  ngOnInit() {
    this.activeWaypoint = this.course.points[this.waypointId];
  }

}
