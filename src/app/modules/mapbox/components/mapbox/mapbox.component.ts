/*
*
* Mapbox component
*
*/
import { Component, OnInit, Inject, Output, Input, EventEmitter } from '@angular/core';

import { MapBoxService } from '../../services/mapbox/mapbox-service.service';

import { MapOptions } from '../../model/map-options';
import * as mapbox from "mapbox-gl";
import {assign} from 'rxjs/util/assign';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'mapbox',
  template: `
      <div style="position: relative; overflow: hidden;">
        <div [attr.id]="'map' + index" style="height: 100vh; margin-top:56px;"></div>
        <ng-content></ng-content>
      </div>
    `,
  providers: [MapBoxService]
})

export class MapboxComponent implements OnInit {
  @Output() state = new EventEmitter();
  @Input() options: Object = this.defaultOptions();
  map: mapbox.Map;
  index = 0;

  constructor( ) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this._mapBoxService.Map(this.mapOptions);
    //
    //   this.state.emit("Loaded");
    // }, 100);
    // this.assign(mapbox, 'accessToken', this.accessToken);
    mapbox.accessToken =  'pk.eyJ1Ijoib2tmZGUiLCJhIjoiY2lpOHhvMnNhMDAyNnZla280ZWhmMm96NyJ9.IvGz74dvvukg19B4Npsm1g';
    setTimeout(() => {
      this.map = new mapbox.Map(this.options);
      this.map.addControl(new mapbox.NavigationControl());
      this.map.addControl(new mapbox.GeolocateControl());
    });
  }

  private defaultOptions(): Object {

    return {
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [122.390789031982422, 52.51833617387861],
      container: `map${this.index}`,
      zoom: 15,
      hash: false,
      interactive: true,
      index: this.index,
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
  }
}
