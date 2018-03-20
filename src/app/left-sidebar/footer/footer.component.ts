import { Component } from '@angular/core';
import { FooterItems } from './footerItems';
import { FooterItem } from './FooterItem';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  footeritems = FooterItems;
}
