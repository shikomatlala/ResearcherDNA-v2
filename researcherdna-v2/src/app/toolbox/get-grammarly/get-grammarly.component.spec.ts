import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGrammarlyComponent } from './get-grammarly.component';

describe('GetGrammarlyComponent', () => {
  let component: GetGrammarlyComponent;
  let fixture: ComponentFixture<GetGrammarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGrammarlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGrammarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
