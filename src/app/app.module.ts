import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AppComponent } from './app.component';
import { CoursesOverviewComponent } from './pages/courses-overview/courses-overview.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { CoursesService } from './services/courses/courses.service';
import {RouterModule} from "@angular/router";
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { MapCellComponent } from './components/map-cell/map-cell.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PageDirective } from './directives/page.directive';
import { NextPageService } from './services/next-page/next-page.service';

import {OverviewMapComponent} from './pages/course-pages/overview-map/overview-map.component';
import {PointToPointMapComponent} from './pages/course-pages/point-to-point-map/point-to-point-map.component';
import {StoryComponent} from './pages/course-pages/story/story.component';
import {QuizComponent} from './pages/course-pages/quiz/quiz.component';
import {SuccessComponent} from './pages/course-pages/success/success.component';
import { TreeMapComponent } from './pages/course-pages/tree-map/tree-map.component';
import {TreeBerlinService} from './services/plugins/tree-berlin.service';
import { OpDebateComponent } from './pages/course-pages/op-debate/op-debate.component';
import { WheelmapMapComponent } from './pages/course-pages/wheelmap-map/wheelmap-map.component';
import { LineChartComponent } from './pages/course-pages/line-chart/line-chart.component';
import { ChloroplethMapComponent } from './pages/course-pages/chloropleth-map/chloropleth-map.component';
import { TreeDashboardComponent } from './pages/course-pages/tree-dashboard/tree-dashboard.component';
import { TreeDevelopmentComponent } from './pages/course-pages/tree-development/tree-development.component';
import { MundraubMapComponent } from './pages/course-pages/mundraub-map/mundraub-map.component';
import { BerlinBesetztMapComponent } from './pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component';
import { BerlinBesetztDashboardComponent } from './pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component';

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
    MapCellComponent,
    SafeHtmlPipe,
    OverviewMapComponent,
    PointToPointMapComponent,
    StoryComponent,
    QuizComponent,
    SuccessComponent,
    PageDirective,
    TreeMapComponent,
    OpDebateComponent,
    WheelmapMapComponent,
    LineChartComponent,
    ChloroplethMapComponent,
    TreeDashboardComponent,
    TreeDevelopmentComponent,
    MundraubMapComponent,
    BerlinBesetztMapComponent,
    BerlinBesetztDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    NgxMapboxGLModule.forRoot({
      accessToken: environment.mapbox_key, // Can also be set per map (accessToken input of mgl-map)
      //geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  providers: [CoursesService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }, NextPageService, TreeBerlinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
