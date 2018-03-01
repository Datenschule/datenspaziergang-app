import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PageComponent} from '../../../model/page-component';
import {NextPageService} from '../../../services/next-page/next-page.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, PageComponent {

  @Input() data;

  constructor(private nextPageService: NextPageService) { }

  ngOnInit() {
  }

  sendNotification() {
    this.nextPageService.announceNextPage('next please');
  }

}
