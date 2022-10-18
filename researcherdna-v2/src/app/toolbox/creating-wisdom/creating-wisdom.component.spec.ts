import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingWisdomComponent } from './creating-wisdom.component';

describe('CreatingWisdomComponent', () => {
  let component: CreatingWisdomComponent;
  let fixture: ComponentFixture<CreatingWisdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingWisdomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingWisdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
