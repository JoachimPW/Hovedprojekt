import { TestBed, inject } from '@angular/core/testing';

import { SupporterService } from './supporter.service';

describe('SupporterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupporterService]
    });
  });

  it('should be created', inject([SupporterService], (service: SupporterService) => {
    expect(service).toBeTruthy();
  }));
});
