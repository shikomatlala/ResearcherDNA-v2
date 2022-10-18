import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheResearchJourneyComponent } from './the-research-journey.component';

describe('TheResearchJourneyComponent', () => {
  let component: TheResearchJourneyComponent;
  let fixture: ComponentFixture<TheResearchJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheResearchJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheResearchJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
