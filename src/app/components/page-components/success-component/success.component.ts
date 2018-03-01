import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PageComponent} from '../../../model/page-component';
import {NextPageService} from '../../../services/next-page/next-page.service';

@Component({
  selector: 'app-success-component',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit, PageComponent {

  @Input() data;

  constructor(private nextPageService: NextPageService) {}

  sendNotification() {
    this.nextPageService.announceNextPage('next please');
  }

  ngOnInit() {
  }

}
