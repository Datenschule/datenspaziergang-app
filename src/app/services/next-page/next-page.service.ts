import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NextPageService {

  private nextPageAnnouncedSource = new Subject<string>();

  nextPageAnnounced$ = this.nextPageAnnouncedSource.asObservable();

  constructor() { }

  announceNextPage(message: string) {
    this.nextPageAnnouncedSource.next(message);
  }

}
