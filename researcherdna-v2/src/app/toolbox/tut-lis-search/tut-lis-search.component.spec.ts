import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutLisSearchComponent } from './tut-lis-search.component';

describe('TutLisSearchComponent', () => {
  let component: TutLisSearchComponent;
  let fixture: ComponentFixture<TutLisSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutLisSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutLisSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
