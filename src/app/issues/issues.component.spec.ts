import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueboxesComponent } from './issueboxes.component';

describe('IssueboxesComponent', () => {
  let component: IssueboxesComponent;
  let fixture: ComponentFixture<IssueboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
