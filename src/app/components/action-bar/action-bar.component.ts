import { Component, OnInit, Input } from '@angular/core';
import { Location} from "@angular/common";

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  @Input() name: string;

  constructor(private locaction: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.locaction.back();
  }

}
