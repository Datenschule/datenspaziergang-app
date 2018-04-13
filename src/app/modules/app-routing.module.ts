import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoursesOverviewComponent} from '../pages/courses-overview/courses-overview.component';
import {CourseDetailComponent} from '../pages/course-detail/course-detail.component';
import {OverviewMapComponent} from '../pages/course-pages/overview-map/overview-map.component';
import {PointToPointMapComponent} from '../pages/course-pages/point-to-point-map/point-to-point-map.component';
import {QuizComponent} from '../pages/course-pages/quiz/quiz.component';
import {StoryComponent} from '../pages/course-pages/story/story.component';
import {SuccessComponent} from '../pages/course-pages/success/success.component';
import {TreeMapComponent} from '../pages/course-pages/tree-map/tree-map.component';
import {OpDebateComponent} from '../pages/course-pages/op-debate/op-debate.component';
import {WheelmapMapComponent} from '../pages/course-pages/wheelmap-map/wheelmap-map.component';
import {LineChartComponent} from '../pages/course-pages/line-chart/line-chart.component';
import {ChloroplethMapComponent} from '../pages/course-pages/chloropleth-map/chloropleth-map.component';
import {TreeDashboardComponent} from '../pages/course-pages/tree-dashboard/tree-dashboard.component';
import {TreeDevelopmentComponent} from '../pages/course-pages/tree-development/tree-development.component';
import {MundraubMapComponent} from '../pages/course-pages/mundraub-map/mundraub-map.component';
import {BerlinBesetztMapComponent} from '../pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component';
import {BerlinBesetztDashboardComponent} from '../pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component';
import {IntroComponent} from '../pages/intro/intro.component';
import {SubjectsComponent} from '../pages/course-pages/subjects/subjects.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full'},
  { path: 'intro', component: IntroComponent },
  { path: 'overview', component: CoursesOverviewComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'overview-map/:course', component: OverviewMapComponent},
  { path: 'point-to-point/:course/:station', component: PointToPointMapComponent},
  { path: 'subjects/:course/:station', component: SubjectsComponent},
  { path: 'quiz/:course/:station/:subject/:page', component: QuizComponent},
  { path: 'story/:course/:station/:subject/:page', component: StoryComponent, pathMatch: 'full'},
  { path: 'success/:course', component: SuccessComponent},
  { path: 'berlin-tree/:course/:station/:subject/:page', component: TreeMapComponent},
  { path: 'op-debate/:course/:station/:subject/:page', component: OpDebateComponent },
  { path: 'wheelmap-map/:course/:station/:subject/:page', component: WheelmapMapComponent },
  { path: 'line-chart/:course/:station/:subject/:page', component: LineChartComponent },
  { path: 'chloropleth-map/:course/:station/:subject/:page', component: ChloroplethMapComponent },
  { path: 'tree-dashboard/:course/:station/:subject/:page', component: TreeDashboardComponent },
  { path: 'tree-development/:course/:station/:subject/:page', component: TreeDevelopmentComponent },
  { path: 'mundraub-map/:course/:station/:subject/:page', component: MundraubMapComponent },
  { path: 'berlin-besetzt-map/:course/:station/:subject/:page', component: BerlinBesetztMapComponent },
  { path: 'berlin-besetzt-dashboard/:course/:station/:subject/:page', component: BerlinBesetztDashboardComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
