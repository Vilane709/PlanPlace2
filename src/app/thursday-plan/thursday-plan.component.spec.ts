import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThursdayPlanComponent } from './thursday-plan.component';

describe('ThursdayPlanComponent', () => {
  let component: ThursdayPlanComponent;
  let fixture: ComponentFixture<ThursdayPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThursdayPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThursdayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
