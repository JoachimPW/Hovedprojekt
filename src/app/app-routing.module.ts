import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssuesComponent } from './issues/issues.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'categories/:categoryId', component: IssuesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
