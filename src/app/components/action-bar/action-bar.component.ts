import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class ActionBarComponent implements OnInit {

  @Input() name: string;

  menuState = 'out';

  constructor(private locaction: Location) {
  }

  ngOnInit() {
  }

  goBack() {
    this.locaction.back();
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
