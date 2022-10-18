import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherdnaComponent } from './researcherdna.component';

describe('ResearcherdnaComponent', () => {
  let component: ResearcherdnaComponent;
  let fixture: ComponentFixture<ResearcherdnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearcherdnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherdnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
