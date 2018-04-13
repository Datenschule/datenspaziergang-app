import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.css']
})
export class PageIndicatorComponent implements OnInit {

  constructor() { }

  @Input() values: any[];
  @Input() active: number;

  ngOnInit() {
  }

}
