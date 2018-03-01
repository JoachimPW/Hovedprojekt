import { Component, OnInit, Input } from '@angular/core';
import { IssueBox } from '../boxcontainer/issueboxes/issuebox';
import { IssueBoxes } from '../boxcontainer/issueboxes/issueboxes';

@Component({
  selector: 'app-issuebox-edit',
  templateUrl: './issuebox-edit.component.html',
  styleUrls: ['./issuebox-edit.component.css']
})
export class IssueboxEditComponent implements OnInit {
  @Input() issuebox: IssueBox;
  

  constructor() { }

  ngOnInit() {
  }

}
