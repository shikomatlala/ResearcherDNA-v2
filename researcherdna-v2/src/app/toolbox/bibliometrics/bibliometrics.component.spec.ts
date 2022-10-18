import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliometricsComponent } from './bibliometrics.component';

describe('BibliometricsComponent', () => {
  let component: BibliometricsComponent;
  let fixture: ComponentFixture<BibliometricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliometricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliometricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
