/*
*
* Mapbox Marker Directive component
*
*/
import {Component, Inject, Output, EventEmitter, Input} from '@angular/core';
import { MapBoxService } from '../../services/mapbox/mapbox-service.service';

@Component({
  selector: 'mapbox-marker-direction',
  template: `
      <a (click)="action()">
        <ng-content></ng-content>
      </a>
    `,
  providers: [MapBoxService]
})

export class MapboxMarkerDirectionComponent {
  @Input() direction: String = "next";

  constructor(@Inject(MapBoxService) private _mapBoxService: MapBoxService) { }

  action() {
    if (this.direction === "next") {
      this._mapBoxService.nextMarker();
    } else {
      this._mapBoxService.prevMarker();
    }
  }
}
