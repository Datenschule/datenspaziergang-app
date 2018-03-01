import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PageComponent} from '../../../model/page-component';
import {NextPageService} from '../../../services/next-page/next-page.service';

@Component({
  selector: 'app-point-to-point-map-component',
  templateUrl: './point-to-point-map.component.html',
  styleUrls: ['./point-to-point-map.component.css']
})
export class PointToPointMapComponent implements OnInit, PageComponent {

  @Input() data;

  constructor(private nextPageService: NextPageService) { }

  ngOnInit() {
  }

  sendNotification() {
    this.nextPageService.announceNextPage('next please');
  }

}
