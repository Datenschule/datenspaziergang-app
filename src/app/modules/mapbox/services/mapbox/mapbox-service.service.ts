import { Injectable, Inject } from '@angular/core';
import * as mapbox from 'mapbox-gl';

@Injectable()
export class MapBoxService {
  accessToken: String;
  public map: any;

  constructor (@Inject('MAPBOX_KEY') _config: String) {
    if (_config) {
      this.accessToken = _config;
    }
  }

  Map(options: Object) {
    this.assign(mapbox, 'accessToken', this.accessToken);

    this.map = new mapbox.Map(options);
    this.map.addControl(new mapbox.NavigationControl());
    this.map.addControl(new mapbox.GeolocateControl());

    return true;
  }

  Marker(el: any, options: Object, coordinates: number[]) {

    setTimeout(() => {
      new mapbox.Marker(el, options)
        .setLngLat(coordinates)
        .addTo(this.map);
    }, 100);

  }

  Line(id: string, coordinates: number[][], layout: Object, paint:Object) {
    setTimeout( () => {
      this.map.addLayer({
        id: id,
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coordinates
            }
          }
        },
        layout: layout,
        paint: paint
      });
    }, 500);
  }

  flyTo(coordinates: Object, zoom: number) {

    setTimeout(() => {
      this.map.flyTo({ center: coordinates, zoom: zoom });
    }, 100);
  }

  prevMarker() {
    console.log(this.map);
  }

  nextMarker() {
    console.log(this.map);
  }

  private assign(obj: any, prop: any, value: any) {
    if (typeof prop === "string")
      prop = prop.split(".");

    if (prop.length > 1) {
      var e = prop.shift();
      this.assign(obj[e] =
          Object.prototype.toString.call(obj[e]) === "[object Object]"
            ? obj[e]
            : {},
        prop,
        value);
    } else
      obj[prop[0]] = value;
  }
}
