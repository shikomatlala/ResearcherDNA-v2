import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchJourneyComponent } from './research-journey.component';

describe('ResearchJourneyComponent', () => {
  let component: ResearchJourneyComponent;
  let fixture: ComponentFixture<ResearchJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
