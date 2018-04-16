import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-chloropleth-map',
  templateUrl: './chloropleth-map.component.html',
  styleUrls: ['./chloropleth-map.component.scss']
})
export class ChloroplethMapComponent implements OnInit {

  nextLink: string;
  defaultText: string = "Hover über einen Bezirk";
  mapDataName: string = this.defaultText;
  source: string = environment.geoJsonSources.berlin;
  title: string;
  mapOption: Object = {
    center: [13.4190634, 52.4945314],
    zoom: [10],
    style: environment.mapboxTiles.chloropleth,
  };

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');
    const subject_id = +this.route.snapshot.paramMap.get('subject');
    const page_id = +this.route.snapshot.paramMap.get('page');
    this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
      console.log(page);
      this.title = page.name;
      this.coursesService.getNextPageLink(course_id, station_id,subject_id, page.next).subscribe((nextPage) => {
        this.nextLink = nextPage;
      });
    });
  }

  hoverFilter = ['==', 'name', ''];

  activateHoverOn(evt: any) {
    //console.log(evt);
    this.mapDataName = evt.features[0].properties.name;
    this.hoverFilter = ['==', 'name', evt.features[0].properties.name];
  }

  disableHover() {
    this.mapDataName = this.defaultText;
    this.hoverFilter = ['==', 'name', ''];
  }

}
