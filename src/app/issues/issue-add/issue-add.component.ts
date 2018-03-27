import { Component, OnInit } from '@angular/core';

import { IssueService } from '../../services/issue.service';

import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})

export class IssueAddComponent implements OnInit {
  toolActive = false;
  name: string;
  problem: string;
  image: string;
  solution: string;
  categoryId: number;

  constructor(private issueService: IssueService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.categoryId = +params['categoryId']);
  }

  activateTool(): void {
    this.toolActive = !this.toolActive;
  }

  addIssue(): void {
    const verifyAdd = confirm("ER DU SIKKER PÅ, AT DU VIL OPRETTE EN NY ISSUE?");
    if (verifyAdd) {
      this.issueService.addIssue({
        issueId: _.random(0, 1000000000),
        categoryId: this.categoryId,
        name: this.name,
        problem: this.problem,
        image: this.image,
        solution: this.solution
      });
      this.reset();
    }
  }

  reset(): void {
    this.name = "";
    this.problem = "";
    this.image = "";
    this.solution = "";
  }

}
