import { Injectable } from '@angular/core';

import { SUPPORTERS } from '../left-sidebar/support/supporters'
import { Supporter } from '../left-sidebar/support/supporter'

import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SupporterService {

  private supporters: Supporter[] = SUPPORTERS; 
  private stream = new BehaviorSubject<Supporter[]>(this.supporters);     

  getSupporters(): Observable<Supporter[]> {
    return this.stream;  
  };
}
