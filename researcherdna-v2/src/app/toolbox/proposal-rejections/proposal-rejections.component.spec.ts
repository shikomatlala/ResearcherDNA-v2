import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalRejectionsComponent } from './proposal-rejections.component';

describe('ProposalRejectionsComponent', () => {
  let component: ProposalRejectionsComponent;
  let fixture: ComponentFixture<ProposalRejectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalRejectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalRejectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
