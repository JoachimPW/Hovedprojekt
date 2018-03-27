import { Component, Input } from '@angular/core';

import { Issue } from '../../issues/issue';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})

export class IssueEditComponent {

  @Input() issue: Issue;

  constructor(private issueService: IssueService) {}

  deleteIssue() {
    const verifyDel = confirm("ER DU SIKKER PÅ, AT DU VIL SLETTE DET VALGTE ISSUE?")
    if (verifyDel) {
      this.issueService.deleteIssue(this.issue)
    }
  }
}
