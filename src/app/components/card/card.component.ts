import {Component, OnInit, Input} from '@angular/core';
import {Course} from '../../model/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()course: Course;

  constructor() { }

  ngOnInit() {
  }

}
