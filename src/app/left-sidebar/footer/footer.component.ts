import { Component, OnInit } from '@angular/core';
import { FooterItems } from './footerItems';
import { FooterItem } from './FooterItem';

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
