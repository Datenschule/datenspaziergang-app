import {AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {PageItem} from '../../model/page-item';
import {PageDirective} from '../../directives/page.directive';
import {PageComponent} from '../../model/page-component';
import {NextPageService} from '../../services/next-page/next-page.service';
import {CoursesService} from '../../services/courses/courses.service';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements AfterViewInit {

  pages: PageItem[];
  currentIndex = -1;
  id = 1;
  @ViewChild(PageDirective) pageHost: PageDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private nextPageService: NextPageService,
              private coursesService: CoursesService
  ) { }

  ngAfterViewInit() {
    console.log('init page container');
    this.coursesService.getCourse(this.id).subscribe(course => this.loadInitial(course));
    this.nextPageService.nextPageAnnounced$.subscribe( _ => this.loadComponent());
  }

  private loadInitial(course) {
    this.pages = course.pageComponents;
    this.loadComponent();
  }

  private loadComponent() {
    this.currentIndex = this.currentIndex < this.pages.length - 1 ? this.currentIndex + 1 : this.pages.length - 1;
    console.log(`loading component with id: ${this.currentIndex}`);
    let pageItem = this.pages[this.currentIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(pageItem.component);

    let viewContainerRef = this.pageHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<PageComponent>componentRef.instance).data = pageItem.data;
  }
}
