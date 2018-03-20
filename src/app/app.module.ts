import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { CategoriesComponent } from './left-sidebar/categories/categories.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FooterComponent } from './left-sidebar/footer/footer.component';
import { IssueEditComponent } from './issues/issue-edit/issue-edit.component';
import { HomeComponent } from './home/home.component'

import { IssueService } from './issues/issue.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LeftSidebarComponent,
    FooterComponent,
    IssuesComponent,
    IssueEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   
  ],
  providers: [
    IssueService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
