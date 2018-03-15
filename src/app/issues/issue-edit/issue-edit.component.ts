import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../../issues/issue';
import { Issues } from '../../issues/issues';
import { IssueService } from '../../issue.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  @Input() issue: Issue;
  @Input() issues: Issue[];

  removeObject;


  constructor() { }

  ngOnInit() {
    console.log(Issues);
  }

  deleteIssue(issue: Issue): void {
    _.remove(this.issues, i =>  i.issueId === issue.issueId);
    console.log()
  }

 
/*
  deleteIssue(issuebox) {

    var index = this.Issues.indexOf(Issues);
    if (index > -1) {
      this.Issues.splice(index, 1);
      console.log(this.Issues);
    }
  }
*/
}
