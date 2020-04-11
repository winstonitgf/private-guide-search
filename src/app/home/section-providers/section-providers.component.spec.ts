import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProvidersComponent } from './section-providers.component';

describe('SectionProvidersComponent', () => {
  let component: SectionProvidersComponent;
  let fixture: ComponentFixture<SectionProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
