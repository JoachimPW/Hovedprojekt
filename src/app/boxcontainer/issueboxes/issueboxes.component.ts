import { Component, OnInit } from '@angular/core';
import { IssueBox } from './issuebox';
import { IssueBoxes } from './issueboxes';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



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
    this.dataService.getIssueBoxes()
        .subscribe(issueboxes => this.issueboxes = issueboxes);
  }

}
