import { Component, OnInit } from '@angular/core';
import { IssueBox } from './issuebox';
import { IssueBoxes } from './issueboxes';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-issueboxes',
  templateUrl: './issueboxes.component.html',
  styleUrls: ['./issueboxes.component.css']
})
export class IssueboxesComponent implements OnInit {
issueboxes: IssueBox[];

selectedIssueBox: IssueBox;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getIssueBox();
  }

  onSelect(issuebox:IssueBox): void {
    this.selectedIssueBox = issuebox;
  }

  getIssueBox(): void {
    this.issueboxes = this.dataService.getIssueBoxes();
  }

}
