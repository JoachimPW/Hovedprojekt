import { Injectable } from '@angular/core';
import { IssueBox } from './boxcontainer/issueboxes/issuebox';
import { IssueBoxes } from './boxcontainer/issueboxes/issueboxes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  /*getIssueBoxes(): IssueBox[] {
    return IssueBoxes;
  }*/

  getIssueBoxes(): Observable<IssueBox[]> {
    return of(IssueBoxes);
  }
  

  

  constructor() { }

}
