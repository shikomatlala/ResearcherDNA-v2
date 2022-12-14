import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsComponent } from './ethics.component';

describe('EthicsComponent', () => {
  let component: EthicsComponent;
  let fixture: ComponentFixture<EthicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
