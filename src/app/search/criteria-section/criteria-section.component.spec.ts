import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaSectionComponent } from './criteria-section.component';

describe('CriteriaSectionComponent', () => {
  let component: CriteriaSectionComponent;
  let fixture: ComponentFixture<CriteriaSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
