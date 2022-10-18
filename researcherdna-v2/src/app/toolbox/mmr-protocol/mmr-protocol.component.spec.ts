import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmrProtocolComponent } from './mmr-protocol.component';

describe('MmrProtocolComponent', () => {
  let component: MmrProtocolComponent;
  let fixture: ComponentFixture<MmrProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmrProtocolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmrProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
