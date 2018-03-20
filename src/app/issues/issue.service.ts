import { Injectable } from '@angular/core';

import { Issue } from './issue';
import { Issues } from './issues';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class IssueService {

  getIssues(): Observable<Issue[]> {
    return of(Issues);
  }

  getIssue(issueId: number): Observable<Issue> {
    return of(Issues.find(Issue => Issue.issueId === issueId));
  }

}

