import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSuccessfulCaseComponent } from './section-successful-case.component';

describe('SectionSuccessfulCaseComponent', () => {
  let component: SectionSuccessfulCaseComponent;
  let fixture: ComponentFixture<SectionSuccessfulCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSuccessfulCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSuccessfulCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
