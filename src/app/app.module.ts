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
import { IssueAddComponent } from './issues/issue-add/issue-add.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LeftSidebarComponent,
    SupportComponent,
    IssuesComponent,
    IssueEditComponent,
    HomeComponent,
    IssueAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,       
  ],
  providers: [
    IssueService,
    SupporterService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
