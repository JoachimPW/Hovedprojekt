import { Component, OnInit } from '@angular/core';

import { SupporterService } from '../../services/supporter.service';
import { Supporter } from '../support/supporter';

@Component({
  selector: 'support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})

export class SupportComponent {
  supporters: Supporter[];

  constructor(private supporterService: SupporterService) {
  }

  ngOnInit(): void {
    this.supporterService.getSupporters().subscribe(supporters => this.supporters = supporters);
  }

}
