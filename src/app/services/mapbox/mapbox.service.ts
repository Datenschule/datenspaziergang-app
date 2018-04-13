import { Injectable } from '@angular/core';
import {Feature, LineString, Point} from 'geojson';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MapboxService {

  constructor(private http: HttpClient) { }

  getRoute(): Observable<any> {

    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/13.4301,52.5109;13.4265,52.5080;13.4194,52.5072?radiuses=40;;100&geometries=geojson&access_token=${environment.mapbox_key}`
    return this.http.get(url).pipe(
      map(res => res['routes'][0].geometry)
    );
  }
}
