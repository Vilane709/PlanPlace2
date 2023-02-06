import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridayPlanComponent } from './friday-plan.component';

describe('FridayPlanComponent', () => {
  let component: FridayPlanComponent;
  let fixture: ComponentFixture<FridayPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FridayPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FridayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
