import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssuesComponent } from './issues/issues.component';
import { HomeComponent } from './home/home.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { AdminpanelComponent } from './e-learning/adminpanel/adminpanel.component';
import { AdminTasksComponent } from './e-learning/adminpanel/admin-tasks/admin-tasks.component';

const routes: Routes = [
  { path: 'categories/:categoryId', component: IssuesComponent },
  { path: '', component: HomeComponent },
  { path: 'search', component: IssuesComponent },
  { path: 'E-learning', component: ELearningComponent },
  { path: 'adminpanel/learningPoints/:pointId', component: AdminTasksComponent },
  { path: 'adminpanel', component: AdminpanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
