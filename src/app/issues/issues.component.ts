import { Component, OnInit, Input } from '@angular/core';

import { Issue } from './issue';
import { Issues } from './issues';
import { IssueService } from '../issue.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'lodash';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  Issues: Issue[];
  Issue: Issue;
  selectedIssue: Issue;
  toolActive = false;
  heading;
  problem;
  solution;
  maxId;

  private categoryId = 1;

  constructor(private issueService: IssueService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getIssues();
    this.route.params.subscribe(params => this.categoryId = +params['categoryId']);
  }

  addIssue() {
    var maxId = Math.max.apply(Math, this.Issues.map(function (o) { return o.issueId; }))
    this.Issues.push(
      { issueId: maxId + 1, categoryId: this.categoryId, heading: this.heading, problem: this.problem, solution: this.solution }
    )
    this.heading = "";
  }

  onSelect(issue: Issue): void {
    this.selectedIssue = issue;
  }

  getIssues(): void {
    this.issueService.getIssues()
      .subscribe(issues => this.Issues = issues);
  }

  activateTool() {
    this.toolActive = !this.toolActive;
  }


}