import { Component } from '@angular/core';

import { Categories } from './Categories';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categories = Categories; 



}
