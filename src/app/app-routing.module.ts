import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './left-sidebar/categories/categories.component';

import { Category } from './left-sidebar/categories/Category';
import { Categories } from './left-sidebar/categories/categories';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: 'boxcontainer', component: IssuesComponent },
  { path: '', redirectTo: '/category/1', pathMatch: 'full' },
  /*{ path: 'issueboxes', component: IssueboxesComponent }, */
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:categoryId', component: IssuesComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
