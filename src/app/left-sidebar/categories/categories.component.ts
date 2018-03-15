import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './Category';
import { Categories } from './Categories';

import { Issue } from '../..//Issues/Issue';
import { Issues } from '../..//Issues/Issues';

import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categories = Categories;
  Issues: Issue[];
  categoryid: Category[];
  selectedCategory: Category;

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  constructor(private dataService: IssueService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  }

}
