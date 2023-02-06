import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturdayPlanComponent } from './saturday-plan.component';

describe('SaturdayPlanComponent', () => {
  let component: SaturdayPlanComponent;
  let fixture: ComponentFixture<SaturdayPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaturdayPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaturdayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
