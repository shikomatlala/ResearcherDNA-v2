import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingRdnaComponent } from './building-rdna.component';

describe('BuildingRdnaComponent', () => {
  let component: BuildingRdnaComponent;
  let fixture: ComponentFixture<BuildingRdnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingRdnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingRdnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
