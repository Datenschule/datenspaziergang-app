import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {ComponentModel} from '../../../model/component-model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  page: ComponentModel;
  nextLink: string;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const page_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {
      this.page = course.pages.find((page) => page.id === page_id);

      const nextType = course.pages.find((page) => page.id === this.page.next).type;
      this.nextLink = `/${nextType}/${course.id}/${this.page.next}`;
    });
  }


}
