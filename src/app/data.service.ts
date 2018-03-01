import { Injectable } from '@angular/core';
import { IssueBox } from './boxcontainer/issueboxes/issuebox';
import { IssueBoxes } from './boxcontainer/issueboxes/issueboxes';

@Injectable()
export class DataService {

  getIssueBoxes(): IssueBox[] {
    return IssueBoxes;

  }

  constructor() { }

}
