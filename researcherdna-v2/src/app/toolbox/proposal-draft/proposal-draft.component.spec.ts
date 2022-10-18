import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDraftComponent } from './proposal-draft.component';

describe('ProposalDraftComponent', () => {
  let component: ProposalDraftComponent;
  let fixture: ComponentFixture<ProposalDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalDraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
