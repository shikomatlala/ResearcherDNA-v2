import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEBookComponent } from './free-e-book.component';

describe('FreeEBookComponent', () => {
  let component: FreeEBookComponent;
  let fixture: ComponentFixture<FreeEBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeEBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeEBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
