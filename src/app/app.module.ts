import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from './in-memory-data-service.service';

import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {MapboxModule} from './modules/mapbox/mapbox.module';


import { AppComponent } from './app.component';
import { CoursesOverviewComponent } from './pages/courses-overview/courses-overview.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { CoursesService } from './services/courses/courses.service';
import {RouterModule} from "@angular/router";
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CourseMapComponent } from './pages/course-map/course-map.component';
import { MapCellComponent } from './components/map-cell/map-cell.component';
import { WaypointInfoComponent } from './components/waypoint-info/waypoint-info.component';
import { WaypointDetailComponent } from './pages/waypoint-detail/waypoint-detail.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { OverviewMapComponent } from './components/page-components/overview-map-component/overview-map.component';
import { PointToPointMapComponent } from './components/page-components/point-to-point-map-component/point-to-point-map.component';
import { StoryComponent } from './components/page-components/story-component/story.component';
import { QuizComponent } from './components/page-components/quiz-component/quiz-component';
import { SuccessComponent } from './components/page-components/success-component/success.component';
import { ErrorComponent } from './components/page-components/error/error.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { PageDirective } from './directives/page.directive';
import { NextPageService } from './services/next-page/next-page.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    CoursesOverviewComponent,
    ActionBarComponent,
    CardComponent,
    CourseDetailComponent,
    CourseMapComponent,
    MapCellComponent,
    WaypointInfoComponent,
    WaypointDetailComponent,
    SafeHtmlPipe,
    OverviewMapComponent,
    PointToPointMapComponent,
    StoryComponent,
    QuizComponent,
    SuccessComponent,
    ErrorComponent,
    PageContainerComponent,
    PageDirective,
  ],
  entryComponents: [
    ErrorComponent,
    OverviewMapComponent,
    PointToPointMapComponent,
    QuizComponent,
    StoryComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    MapboxModule.forRoot(environment.mapbox_key),
    PerfectScrollbarModule
  ],
  providers: [CoursesService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }, NextPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
