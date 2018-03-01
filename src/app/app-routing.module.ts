import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemsComponent } from './left-sidebar/menu-items/menu-items.component';
import { IssueboxesComponent } from './boxcontainer/issueboxes/issueboxes.component';
import { BoxcontainerComponent } from './boxcontainer/boxcontainer.component';

const routes: Routes = [
  { path: 'boxcontainer', component: BoxcontainerComponent },
  { path: '', redirectTo: '/boxcontainer', pathMatch: 'full' },
  { path: 'issueboxes', component: IssueboxesComponent },
  { path: 'menuitems', component: MenuItemsComponent },
  
  { path: 'issueboxes/:boxId', component: IssueboxesComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
