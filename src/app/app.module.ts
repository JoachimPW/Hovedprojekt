import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Issues } from './issues/issues';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { CategoriesComponent } from './left-sidebar/categories/categories.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FooterComponent } from './left-sidebar/footer/footer.component';
import { IssueEditComponent } from './issues/issue-edit/issue-edit.component';

import { IssueService } from './issue.service';
import { AppRoutingModule } from './/app-routing.module';
import * as _ from 'lodash';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LeftSidebarComponent,
    FooterComponent,
    IssuesComponent,
    IssueEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [
    IssueService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
