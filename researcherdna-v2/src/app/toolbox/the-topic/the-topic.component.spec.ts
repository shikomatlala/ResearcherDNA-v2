import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTopicComponent } from './the-topic.component';

describe('TheTopicComponent', () => {
  let component: TheTopicComponent;
  let fixture: ComponentFixture<TheTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
