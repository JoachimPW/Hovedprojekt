import { Component, OnInit } from '@angular/core';
import { FooterItems } from './footerItemArray';
import { FooterItem } from './FooterItemClass';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footeritems = FooterItems;
  constructor() { }

  ngOnInit() {
  }

}
