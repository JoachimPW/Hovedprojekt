import { Injectable } from '@angular/core';

import { LEARNINGPOINTS } from './../e-learning/menu/learning-point/learning-points'
import { LearningPoint } from './../e-learning/menu/learning-point/learning-point'

import { Observable } from 'rxjs/Rx';

@Injectable()
export class LearningPointsService {

  getLearningPoints(): Observable<LearningPoint[]> {
    return Observable.of(LEARNINGPOINTS);
  }; 
  
}
