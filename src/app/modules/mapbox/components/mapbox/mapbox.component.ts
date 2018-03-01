/*
*
* Mapbox component
*
*/
import { Component, OnInit, Inject, Output, Input, EventEmitter } from '@angular/core';

import { MapBoxService } from '../../services/mapbox/mapbox-service.service';

import { MapOptions } from '../../model/map-options';

@Component({
  selector: 'mapbox',
  template: `
      <div style="position: relative; overflow: hidden;">
        <div [attr.id]="'map' + mapOptions.index" style="height: 100vh; margin-top:56px;"></div>
        <ng-content></ng-content>
      </div>
    `,
  providers: [MapBoxService]
})

export class MapboxComponent implements OnInit {
  @Output() state = new EventEmitter();
  @Input('options') mapOptions: MapOptions = this.defaultOptions();


  constructor( @Inject(MapBoxService) private _mapBoxService: MapBoxService) { }

  ngOnInit() {
    setTimeout(() => {
      this._mapBoxService.Map(this.mapOptions);

      this.state.emit("Loaded");
    }, 100);
  }

  private defaultOptions(): MapOptions {
    const index = 0;

    return {
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-122.486052, 37.830348],
      container: `map${index}`,
      zoom: 15,
      hash: false,
      interactive: true,
      index: index,
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
