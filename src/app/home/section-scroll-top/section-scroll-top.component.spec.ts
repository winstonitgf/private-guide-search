import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionScrollTopComponent } from './section-scroll-top.component';

describe('SectionScrollTopComponent', () => {
  let component: SectionScrollTopComponent;
  let fixture: ComponentFixture<SectionScrollTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionScrollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
