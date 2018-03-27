import { Injectable } from '@angular/core';

import { Issue } from '../issues/issue';
import { ISSUES } from '../issues/issues';

import * as _ from 'lodash';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class IssueService {

  private issues: Issue[] = ISSUES;
  private stream = new BehaviorSubject<Issue[]>(this.issues);

  getIssues(): Observable<Issue[]> {
    return this.stream;
  }

  addIssue(issue: Issue) {
    this.issues.push(issue);
  }

  deleteIssue(issue: Issue) {
    _.remove(this.issues, i => i.issueId === issue.issueId);
  }

}

