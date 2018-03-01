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
  
  getIssueBoxCategoryId(id: number): Observable<IssueBox> {
    // Todo: send the message _after_ fetching the hero
    
    return of(IssueBoxes.find(IssueBox => IssueBox.boxId === id));
  }
  

  constructor() { }

}

