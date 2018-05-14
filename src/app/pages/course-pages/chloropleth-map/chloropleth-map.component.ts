import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../../environments/environment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-chloropleth-map',
  templateUrl: './chloropleth-map.component.html',
  styleUrls: ['./chloropleth-map.component.scss']
})
export class ChloroplethMapComponent implements OnInit {

  nextLink: string;
  title: string;
  Object = Object; // workaround to access `Object` in template

  defaultText: string = "Wähle einen Bezirk aus, um genaueres zu erfahren.";
  mapData: Object = { name: this.defaultText };
  activeMap: string;
  theMapStyles: any;

  legend = [
    ['0-10', '#1E0843'],
    ['10-25', '#33106C'],
    ['25-40', '#4C00C8'],
    ['40-60', '#8047DD'],
    ['60-80', '#AB78FF'],
    ['80-100', '#C8A7FF'],
    ['110+', '#DAC4FF']
  ];

  mapKeysToLayer: Object = {
    society: 'Gesellschaft / Partizipation',
    craft: 'Handwerk',
    culture: 'Kunst / Kultur',
    literature: 'Literatur / Medien',
    music: 'Musik / Tanz',
    stem: 'Naturwissenschaft / Technik',
    sports: 'Sport',
    language: 'Sprachen',
    environment: 'Umwelt'
  };

  mapOption: any = {
    center: [13.4190634, 52.4945314],
    zoom: [9],
    style: environment.mapboxTiles.chloropleth,
    sources: {
      berlinBorders: "https://raw.githubusercontent.com/berlinermorgenpost/Berlin-Geodaten/master/berlin_bezirke.geojson",
      schoolActivities: "/assets/data/schools.json"
    }
  };

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');
    const subject_id = +this.route.snapshot.paramMap.get('subject');
    const page_id = +this.route.snapshot.paramMap.get('page');
    this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
      this.title = page.name;
      this.coursesService.getNextPageLink(course_id, station_id,subject_id, page.next).subscribe((nextPage) => {
        this.nextLink = nextPage;
      });
    });
  }

  hoverFilter = ['==', 'name', ''];

  activateHoverOn(evt: any) {
    this.mapData = evt.features[0].properties;
    this.hoverFilter = ['==', 'name', evt.features[0].properties.name];
  }

  disableHover() {
    this.mapData = {};
    this.mapData['name'] = this.defaultText;
    this.hoverFilter = ['==', 'name', ''];
  }

  moveLayerToTop(evt: any) {
    let mapId = evt.target.value;
    this.activeMap = mapId;
    let layerId = mapId.toUpperCase();
    this.theMapStyles = this.theMapStyles.moveLayer(layerId, 'outline');
  }

  onLoad(evt: any) {
    this.theMapStyles = evt;
  }

  goBack() {
    this.location.back();
  }

}
