import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuesdayPlanComponent } from './tuesday-plan.component';

describe('TuesdayPlanComponent', () => {
  let component: TuesdayPlanComponent;
  let fixture: ComponentFixture<TuesdayPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuesdayPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuesdayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
