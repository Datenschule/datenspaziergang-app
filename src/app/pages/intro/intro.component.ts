import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  title = 'Datenspaziergang';

  constructor() {
  }

  ngOnInit() {
  }

}
