import { Component, OnInit, Input } from '@angular/core';

import { Issue } from '../../issues/issue';
import { Issues } from '../../issues/issues';
import { IssueService } from '../issue.service';

import * as _ from 'lodash';

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  @Input() issue: Issue;
  @Input() issues: Issue[];

  removeObject;

  ngOnInit() {
    console.log(Issues);
  }

  deleteIssue(issue: Issue): void {
    var verifyDel = confirm("ER DU SIKKER PÅ, AT DU VIL SLETTE DET VALGTE ISSUE?")
    if(verifyDel === true ) {
    _.remove(this.issues, i =>  i.issueId === issue.issueId);
    }
  }
}
