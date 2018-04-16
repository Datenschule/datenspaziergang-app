import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-wheelmap-map',
  templateUrl: './wheelmap-map.component.html',
  styleUrls: ['./wheelmap-map.component.scss']
})
export class WheelmapMapComponent implements OnInit {

  nextLink: string;
  title: string;
  mapOptions = {
    style: environment.mapboxTiles.light,
    zoom: [14],
    center: [13.40497, 52.517221]
  };

  log(param: string) {
    console.log(param);
  }

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');
    const page_id = +this.route.snapshot.paramMap.get('page');
    const subject_id = +this.route.snapshot.paramMap.get('subject');
    this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
      console.log(page);
      this.title = page.title;
      this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe((nextPage) => {
        this.nextLink = nextPage;
      });
    });
  }

}
