/*
*
* Mapbox Marker component
*
*/
import {Directive, Input, OnInit, Inject, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

import {MapBoxService} from '../../services/mapbox/mapbox-service.service';
import {Subject} from 'rxjs/Subject';
import * as mapbox from 'mapbox-gl';

@Directive({
  selector: 'mapbox-marker',
})

export class MapboxMarkerDirective implements OnInit, OnDestroy, OnChanges {
  @Input() image: String;
  @Input() width = 60;
  @Input() height = 60;
  @Input() coordinates: number[];
  @Input() popup: String;
  // @Input() mapSubject: Subject<mapbox.Map>;
  @Input() data: Object;
  @Input() flyTo: number;
  @Output() click = new EventEmitter();
  @Input() map: mapbox.Map;


  constructor(private mapBoxService: MapBoxService) {
  }

  ngOnInit() {
    // this.mapSubject.subscribe(event => {
    //   this.map = event;
    //   this.addPins();
    // });
  }

  ngOnDestroy(): void {
    // this.mapSubject.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.map.currentValue) {
      this.map.on('style.load', () => this.addPins(changes.map.currentValue));
    }
  }

  addPins(map) {
    const el = document.createElement('div');
    console.log(this.map);
    el.className = 'marker';
    el.style.backgroundImage = 'url(' + this.image + ')';
    el.style.backgroundSize = 'cover';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.width = this.width + 'px';
    el.style.height = this.height + 'px';

    new mapbox.Marker(el, {offset: [-this.width / 2, -this.height / 2]})
      .setLngLat(this.coordinates)
      .addTo(map);


    // this.mapBoxService.Marker(
    //   el, // element
    //   {offset: [-this.width / 2, -this.height / 2]}, // options
    //   this.coordinates // coordinates
    // );

    el.addEventListener('click', () => {
      if (this.flyTo) {
        this.mapBoxService.flyTo(this.coordinates, this.flyTo);
      }

      this.click.emit({
        data: this.data,
        coordinates: this.coordinates
      });
    })
    ;
  }
}
