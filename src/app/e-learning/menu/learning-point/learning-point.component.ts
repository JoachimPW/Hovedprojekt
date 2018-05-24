import { Component, OnInit } from '@angular/core';

import { LearningPoint } from '././learning-point'
import { LearningPointsService } from './../../../services/learning-points.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'learning-point',
  templateUrl: './learning-point.component.html',
  styleUrls: ['./learning-point.component.css']
})
export class LearningPointComponent implements OnInit {
  learningPoints: LearningPoint[];

  constructor(private learningPointsService: LearningPointsService,
    private route: ActivatedRoute,
    public router: Router)  {
  }
  

  ngOnInit(): void {
    this.learningPointsService.getLearningPoints().subscribe(learningPoints => this.learningPoints = learningPoints);
  }

}
