import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.scss']
})
export class PageIndicatorComponent implements OnInit {

  constructor() { }

  @Input() stations: any[];
  @Input() active: number;
  @Input() course: number;

  displayableList: Array<Object>;

  ngOnInit() {
    this.populateDisplayableList();
  }

  ngOnChanges(changes: any) {
    this.active = changes.active.currentValue;
    this.populateDisplayableList();
  }

  populateDisplayableList() {
    this.displayableList = this.stations.map((x) => {
      let display_id = x.id + 1;
      let active = (x.id === this.active) || (x.id < this.active);
      let link = `/point-to-point/${this.course}/${x.id}`;
      return {id: x.id,
              display_id,
              active,
              link};
    });
  }
}
