import { Component, OnInit, Input } from '@angular/core';

import { Issue } from './issue';
import { IssueService } from './issue.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'lodash';


@Component({
  selector: 'issues',
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
  issueForm;

  private categoryId = 1;

  constructor(private issueService: IssueService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getIssues();
    this.route.params.subscribe(params => this.categoryId = +params['categoryId']);
  }

  addIssue() {
    var verifyAdd = confirm("ER DU SIKKER PÅ, AT DU VIL OPRETTE EN NY ISSUE?")
    if (verifyAdd === true) {
      var maxId = Math.max.apply(Math, this.Issues.map(function (o) { return o.issueId; }))
      if (maxId === -Infinity) {
        maxId = 1;
      }
      
      console.log(this.Issues);
      this.Issues.push(
        { issueId: maxId + 1, categoryId: this.categoryId, heading: this.heading, problem: this.problem, solution: this.solution }
      )
    }
    /* For at reset inputfelterne, da form.reset() ikke virker */
    this.heading = undefined;
    this.problem = undefined;
    this.solution = undefined;
    console.log(maxId);
  }

  onSelect(issue: Issue): void {
    this.selectedIssue = issue;
    console.log(this.selectedIssue);

  }

  getIssues(): void {
    this.issueService.getIssues()
      .subscribe(issues => this.Issues = issues);
  }

  activateTool(): void {
    this.toolActive = !this.toolActive;
  }


}