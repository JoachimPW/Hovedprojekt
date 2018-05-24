import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { CategoriesComponent } from './left-sidebar/categories/categories.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { SupportComponent } from './left-sidebar/support/support.component';
import { IssueEditComponent } from './issues/issue-edit/issue-edit.component';
import { HomeComponent } from './home/home.component'

import { IssueService } from './services/issue.service';
import { SupporterService } from './services/supporter.service'
import { CategoryService } from './services/category.service';
import { IssueAddComponent } from './issues/issue-add/issue-add.component';
import { FilterPipe } from './pipes/search-filter.pipe';
import { ELearningComponent } from './e-learning/e-learning.component';
import { MenuComponent } from './e-learning/menu/menu.component';
import { LearningPointComponent } from './e-learning/menu/learning-point/learning-point.component'
import { LearningPointsService } from './services/learning-points.service';
import { AdminpanelComponent } from './e-learning/adminpanel/adminpanel.component';
import { AdminTasksComponent } from './e-learning/adminpanel/admin-tasks/admin-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LeftSidebarComponent,
    SupportComponent,
    IssuesComponent,
    IssueEditComponent,
    HomeComponent,
    IssueAddComponent,
    FilterPipe,
    ELearningComponent,
    MenuComponent,
    LearningPointComponent,
    AdminpanelComponent,
    AdminTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,       
  ],
  providers: [
    IssueService,
    SupporterService,
    CategoryService,
    LearningPointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
