import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%,0,0)'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class ActionBarComponent implements OnInit {

  @Input() name: string;
  @Input() showMenu: boolean;
  @Input() showBack: boolean;
  @Input() courseId: number;
  @Input() stationId: number;

  linkToLastStation: string;
  menuState = 'out';

  constructor(private locaction: Location) {
  }

  ngOnInit() {
    this.linkToLastStation = `/subjects/${this.courseId}/${this.stationId}`;
  }

  goBack() {
    this.locaction.back();
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
