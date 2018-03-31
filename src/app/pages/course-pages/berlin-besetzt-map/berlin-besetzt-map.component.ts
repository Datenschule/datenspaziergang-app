import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-berlin-besetzt-map',
  templateUrl: './berlin-besetzt-map.component.html',
  styleUrls: ['./berlin-besetzt-map.component.css']
})
export class BerlinBesetztMapComponent implements OnInit {

  nextLink: string;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');
    const page_id = +this.route.snapshot.paramMap.get('page');
    this.coursesService.getPage(course_id, station_id, page_id).subscribe((page) => {
      console.log(page);

      this.coursesService.getNextPageLink(course_id, station_id, page.next).subscribe((nextPage) => {
        this.nextLink = nextPage;
      });
    });
  }


}
