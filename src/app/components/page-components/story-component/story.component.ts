import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PageComponent} from '../../../model/page-component';
import {NextPageService} from '../../../services/next-page/next-page.service';

@Component({
  selector: 'app-story-component',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit, PageComponent {

  @Input() data;

  constructor(private nextPageService: NextPageService) {}

  ngOnInit() {
  }

  sendNotification() {
    this.nextPageService.announceNextPage('next please');
  }

}
