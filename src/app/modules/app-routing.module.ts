import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoursesOverviewComponent} from '../pages/courses-overview/courses-overview.component';
import {CourseDetailComponent} from '../pages/course-detail/course-detail.component';
import {CourseMapComponent} from '../pages/course-map/course-map.component';
import {WaypointDetailComponent} from '../pages/waypoint-detail/waypoint-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: CoursesOverviewComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'map/:id', component: CourseMapComponent },
  { path: 'waypoint/:course/:waypoint', component: WaypointDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
