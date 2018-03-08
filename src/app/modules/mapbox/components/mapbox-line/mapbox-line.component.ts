import {Directive, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as mapbox from 'mapbox-gl';
import {Subject} from 'rxjs/Subject';

@Directive({
  selector: 'mapbox-line',
})
export class MapboxLineDirective implements OnInit, OnChanges {
  @Input() id = 'line-0';

  @Input() layout: mapbox.LineLayout = {'line-join': 'round', 'line-cap': 'round'};
  @Input() paint: mapbox.LinePaint = {'line-width': 8, 'line-color': '#000'};
  @Input() mapLoadedSubject: Subject<mapbox.Map> = new Subject<mapbox.Map>();
  @Input() coordinates: number[][];

  @Input() map: mapbox.Map;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.map.currentValue) {
      this.map.on('style.load', () => this.initLine(changes.map.currentValue));
    }
  }

  initLine(map) {
    console.log('initline');

    map.addLayer({
      id: this.id,
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: this.coordinates
          }
        }
      },
      layout: this.layout,
      paint: this.paint
    });
  }
}
