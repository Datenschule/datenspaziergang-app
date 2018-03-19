import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {Tree} from '../../model/tree';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class TreeBerlinService {

  constructor(private http: HttpClient) {
  }

  getTreesByAdress(address: string): Observable<any> {
    const url = `https://trees.codefor.de/api/trees/?address=${encodeURIComponent(address)}`;
    return this.http.get<Object>(url).pipe(
      tap(res => console.log(`Fetching trees for ${address}`)),
      catchError((this.handleError('get trees', []))));
  }

  private parseTree(raw: Object): Tree {
    const tree = raw['properties'];
    const coordinates = raw['geometry']['coordinates'];
    tree.coordinates = {lon: coordinates[0], lat: coordinates[1]};
    return tree;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
