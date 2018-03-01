import { Component, OnInit, Input } from '@angular/core';
import { IssueBox } from '../boxcontainer/issueboxes/issuebox';
import { IssueBoxes } from '../boxcontainer/issueboxes/issueboxes';
import { DataService } from '../data.service';


@Component({
  selector: 'app-boxcontainer',
  templateUrl: './boxcontainer.component.html',
  styleUrls: ['./boxcontainer.component.css']
})
export class BoxcontainerComponent implements OnInit {
  

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
