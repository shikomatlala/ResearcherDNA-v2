import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviseStudentHomeComponent } from './supervise-student-home.component';

describe('SuperviseStudentHomeComponent', () => {
  let component: SuperviseStudentHomeComponent;
  let fixture: ComponentFixture<SuperviseStudentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperviseStudentHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperviseStudentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
