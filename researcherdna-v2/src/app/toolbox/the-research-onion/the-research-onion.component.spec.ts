import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheResearchOnionComponent } from './the-research-onion.component';

describe('TheResearchOnionComponent', () => {
  let component: TheResearchOnionComponent;
  let fixture: ComponentFixture<TheResearchOnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheResearchOnionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheResearchOnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
