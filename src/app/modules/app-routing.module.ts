import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoursesOverviewComponent} from '../pages/courses-overview/courses-overview.component';
import {CourseDetailComponent} from '../pages/course-detail/course-detail.component';
import {WaypointDetailComponent} from '../pages/waypoint-detail/waypoint-detail.component';
import {OverviewMapComponent} from '../pages/course-pages/overview-map/overview-map.component';
import {PointToPointMapComponent} from '../pages/course-pages/point-to-point-map/point-to-point-map.component';
import {QuizComponent} from '../pages/course-pages/quiz/quiz.component';
import {StoryComponent} from '../pages/course-pages/story/story.component';
import {SuccessComponent} from '../pages/course-pages/success/success.component';
import {TreeMapComponent} from '../pages/course-pages/tree-map/tree-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: CoursesOverviewComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'waypoint/:course/:waypoint', component: WaypointDetailComponent},
  { path: 'overview-map/:course/:id', component: OverviewMapComponent},
  { path: 'point-to-point/:course/:id', component: PointToPointMapComponent},
  { path: 'quiz/:course/:id', component: QuizComponent},
  { path: 'story/:course/:id', component: StoryComponent},
  { path: 'success/:course/:id', component: SuccessComponent},
  { path: 'berlin-tree/:course/:id', component: TreeMapComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
