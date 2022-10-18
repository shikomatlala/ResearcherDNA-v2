import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvankovaJourneyComponent } from './ivankova-journey.component';

describe('IvankovaJourneyComponent', () => {
  let component: IvankovaJourneyComponent;
  let fixture: ComponentFixture<IvankovaJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvankovaJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvankovaJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
