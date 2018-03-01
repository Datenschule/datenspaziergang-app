import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PageItem} from '../../../model/page-item';
import {PageComponent} from '../../../model/page-component';
import {NextPageService} from '../../../services/next-page/next-page.service';

@Component({
  selector: 'app-overview-map-component',
  templateUrl: './overview-map.component.html',
  styleUrls: ['./overview-map.component.css']
})
export class OverviewMapComponent implements OnInit, PageComponent {

  @Input() data;

  constructor(private nextPageService: NextPageService) { }

  ngOnInit() {
  }

  sendNotification() {
    this.nextPageService.announceNextPage('next please');
  }

}
