/*
*
* Mapbox Marker component
*
*/
import { Directive, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';

import { MapBoxService } from '../../services/mapbox/mapbox-service.service';

@Directive({
  selector: 'mapbox-marker',
})

export class MapboxMarkerDirective implements OnInit {
  @Input() image: String;
  @Input() width = 60;
  @Input() height = 60;
  @Input() coordinates: number[];
  @Input() popup: String;
  @Input() map: Object;
  @Input() data: Object;
  @Input() flyTo: number;
  @Output() click = new EventEmitter();

  constructor( private mapBoxService: MapBoxService) {}

  ngOnInit() {
    const el = document.createElement('div');

    el.className = 'marker';
    el.style.backgroundImage 	= 'url(' + this.image + ')';
    el.style.backgroundSize   	= 'cover';
    el.style.backgroundRepeat 	= 'no-repeat';
    el.style.width 				= this.width + 'px';
    el.style.height 			= this.height + 'px';

    this.mapBoxService.Marker(
      el, // element
      {offset: [-this.width / 2, -this.height / 2]}, // options
      this.coordinates // coordinates
    );

    el.addEventListener("click", () => {

      if(this.flyTo) {
        this.mapBoxService.flyTo(this.coordinates, this.flyTo);
      }

      this.click.emit({
        data: this.data,
        coordinates: this.coordinates
      });
    });
  }
}
