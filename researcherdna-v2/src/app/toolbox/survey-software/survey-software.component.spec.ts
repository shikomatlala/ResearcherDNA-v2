import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySoftwareComponent } from './survey-software.component';

describe('SurveySoftwareComponent', () => {
  let component: SurveySoftwareComponent;
  let fixture: ComponentFixture<SurveySoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveySoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
