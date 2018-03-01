import { Component, OnInit } from '@angular/core';
import { MenuItem } from './MenuItemClass';
import { MenuItems } from './menuItemArray';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
 menuitems = MenuItems;

 selectedMenuItem: MenuItem;

onSelect(menuItem: MenuItem): void {
  this.selectedMenuItem = menuItem;
}

  constructor() { }

  ngOnInit() {
  }

}
