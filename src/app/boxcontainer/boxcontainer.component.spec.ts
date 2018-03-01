import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxcontainerComponent } from './boxcontainer.component';

describe('BoxcontainerComponent', () => {
  let component: BoxcontainerComponent;
  let fixture: ComponentFixture<BoxcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
