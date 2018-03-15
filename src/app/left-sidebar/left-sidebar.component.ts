import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './categories/Category';
import { Categories } from './categories/Categories';

import { Issue } from '../Issues/issue';
import { Issues } from '../Issues/issues';

import { IssueService } from '../issue.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})

export class LeftSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
