import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelimProposalComponent } from './prelim-proposal.component';

describe('PrelimProposalComponent', () => {
  let component: PrelimProposalComponent;
  let fixture: ComponentFixture<PrelimProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrelimProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrelimProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
