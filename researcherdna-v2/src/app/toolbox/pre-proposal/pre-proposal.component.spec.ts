import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreProposalComponent } from './pre-proposal.component';

describe('PreProposalComponent', () => {
  let component: PreProposalComponent;
  let fixture: ComponentFixture<PreProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
