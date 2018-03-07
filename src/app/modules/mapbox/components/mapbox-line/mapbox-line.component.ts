import {Directive, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MapBoxService} from '../../services/mapbox/mapbox-service.service';
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
    // this.mapboxService.Line(this.id, this.line,
    //   {"line-join": this.lineJoin, "line-cap": this.lineCap},
    //   {"line-color": this.color, "line-width": this.lineWidth}
    //   );
    // this.mapLoadedSubject.subscribe(event => {
    //   this.map = event;
    //   this.initLine();
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.map.currentValue) {
     this.map.on('style.load', () => this.initLine(changes.map.currentValue));
    }
  }

  initLine(map) {
    console.log('initline');
    console.log(map);
    // this.map.addLayer({
    //   id: this.id,
    //   type: 'line',
    //   source: '{type: "geojson", data: { type: "Feature", properties: { geometry: { type: "LineString", coordinates: [ [ 13.390789031982422, 52.51833617387861], [ 13.394072055816649, 52.51682151784933], [ 13.394308090209961, 52.514209919312506],[ 13.391432762145996, 52.51279959156077],[ 13.390467166900635, 52.51426215280443],[ 13.385703563690186, 52.51452331933267],[ 13.387548923492432, 52.516024996747156],[ 13.386948108673096, 52.51735687637764],[ 13.38883638381958, 52.51905431150669]]}}}}',
    //   layout: this.layout,
    //   paint: this.paint
    // });
    // let coordinates =
    map.addLayer({
      id: this.id,
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: this.coordinates
          }
        }
      },
      layout: this.layout,
      paint: this.paint
    });
  }
}
