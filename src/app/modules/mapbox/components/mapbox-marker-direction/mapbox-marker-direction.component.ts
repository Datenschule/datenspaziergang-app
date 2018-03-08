/*
*
* Mapbox Marker Directive component
*
*/
import {Component, Inject, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import * as mapbox from 'mapbox-gl';

@Component({
  selector: 'mapbox-marker-direction',
  template: `
    <a (click)="action()">
      <ng-content></ng-content>
    </a>
  `,
})

export class MapboxMarkerDirectionComponent implements OnInit {
  @Input() direction: String = 'next';
  @Input() mapLoadedSubject: Subject<mapbox.Map> = new Subject<mapbox.Map>();
  @Input() id = 'line-0';
  @Input() coordinates: number[][];
  @Input() layout: mapbox.LineLayout = {};
  @Input() paint: mapbox.LinePaint = {};
  map: mapbox.Map;


  constructor() {
  }

  ngOnInit(): void {
    this.mapLoadedSubject.subscribe(event => {
      this.map = event;
      this.initLine();
    });
  }

  initLine() {
    console.log('initline');
    console.log(this.map);
    this.map.addLayer({
      id: this.id,
      type: 'line',
      source: ' { type: "geojson", ' +
      'data: { ' +
      'type: "Feature", ' +
      'properties: {}, ' +
      'geometry: { ' +
      'type: "LineString", coordinates: [' +
      '[ 13.390789031982422, lon: 52.51833617387861],' +
      '[ 13.394072055816649, lon: 52.51682151784933},' +
      '[ 13.394308090209961, 52.514209919312506],' +
      '[ 13.391432762145996, 52.51279959156077],' +
      '[ 13.390467166900635, 52.51426215280443],' +
      '[ 13.385703563690186, 52.51452331933267],' +
      '[ 13.387548923492432, 52.516024996747156],' +
      '[ 13.386948108673096, 52.51735687637764],' +
      '[ 13.38883638381958, 52.51905431150669]' +
      ']' +
      '}' +
      '}',
      layout: this.layout,
      paint: this.paint
    });
  }

  action() {
    if (this.direction === 'next') {
      // this._mapBoxService.nextMarker();
    } else {
      // this._mapBoxService.prevMarker();
    }
  }
}
