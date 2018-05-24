import { Component, OnInit, Input } from '@angular/core';

import { Issue } from './issue';
import { IssueService } from '../services/issue.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})

export class IssuesComponent implements OnInit {
  
  issues: Issue[];
  selectedIssue: Issue;
  categoryId: number;

  constructor(private issueService: IssueService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.issueService.getIssues().subscribe(issues => this.issues = issues);
    this.route.params.subscribe(params => this.categoryId = +params['categoryId']);
  }

  onSelect(issue: Issue): void {
    this.selectedIssue = issue;
  }
}