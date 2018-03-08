import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import {ComponentModel} from '../../../model/component-model';
import {Story} from '../../../model/story';
import {Course} from '../../../model/course';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  page: ComponentModel;
  nextLink: string;
  story: Story;
  course: Course;
  image:SafeStyle;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const page_id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(course_id).subscribe((course) => {
      this.page = course.pages.find((page) => page.id === page_id);
      this.story = this.page.data as Story;
      console.log(this.story);
      this.course = course;
      const nextType = course.pages.find((page) => page.id === this.page.next).type;
      this.nextLink = `/${nextType}/${course.id}/${this.page.next}`;
      this.image = this.image = this.sanitizer.bypassSecurityTrustStyle(`url(${this.story.img})`);
    });
  }
}
