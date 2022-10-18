import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResQuestionsComponent } from './res-questions.component';

describe('ResQuestionsComponent', () => {
  let component: ResQuestionsComponent;
  let fixture: ComponentFixture<ResQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
