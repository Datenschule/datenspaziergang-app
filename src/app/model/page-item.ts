import {Type} from '@angular/core';

export class PageItem {
  constructor(public component: Type<any>, public data: any) {}
}
