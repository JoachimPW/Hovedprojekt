import { TestBed, inject } from '@angular/core/testing';

import { LearningPointsService } from './learning-points.service';

describe('LearningPointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningPointsService]
    });
  });

  it('should be created', inject([LearningPointsService], (service: LearningPointsService) => {
    expect(service).toBeTruthy();
  }));
});
