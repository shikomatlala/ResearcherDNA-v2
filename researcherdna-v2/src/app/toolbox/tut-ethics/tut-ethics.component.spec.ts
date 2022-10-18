import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutEthicsComponent } from './tut-ethics.component';

describe('TutEthicsComponent', () => {
  let component: TutEthicsComponent;
  let fixture: ComponentFixture<TutEthicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutEthicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
