import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPointComponent } from './learning-point.component';

describe('LearningPointComponent', () => {
  let component: LearningPointComponent;
  let fixture: ComponentFixture<LearningPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
