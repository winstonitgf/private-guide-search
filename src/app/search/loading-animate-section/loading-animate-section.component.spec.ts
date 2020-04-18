import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimateSectionComponent } from './loading-animate-section.component';

describe('LoadingAnimateSectionComponent', () => {
  let component: LoadingAnimateSectionComponent;
  let fixture: ComponentFixture<LoadingAnimateSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingAnimateSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAnimateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
