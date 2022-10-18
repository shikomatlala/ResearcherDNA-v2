import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitReviewComponent } from './lit-review.component';

describe('LitReviewComponent', () => {
  let component: LitReviewComponent;
  let fixture: ComponentFixture<LitReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
