import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDesignComponent } from './research-design.component';

describe('ResearchDesignComponent', () => {
  let component: ResearchDesignComponent;
  let fixture: ComponentFixture<ResearchDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
