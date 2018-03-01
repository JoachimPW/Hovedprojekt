import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueboxEditComponent } from './issuebox-edit.component';

describe('IssueboxEditComponent', () => {
  let component: IssueboxEditComponent;
  let fixture: ComponentFixture<IssueboxEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueboxEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueboxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
