import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { MenuItemsComponent } from './left-sidebar/menu-items/menu-items.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FooterComponent } from './left-sidebar/footer/footer.component';
import { BoxcontainerComponent } from './boxcontainer/boxcontainer.component';
import { IssueboxesComponent } from './boxcontainer/issueboxes/issueboxes.component';
import { IssueboxEditComponent } from './issuebox-edit/issuebox-edit.component';
import { DataService } from './data.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    LeftSidebarComponent,
    FooterComponent,
    BoxcontainerComponent,
    IssueboxesComponent,
    IssueboxEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
