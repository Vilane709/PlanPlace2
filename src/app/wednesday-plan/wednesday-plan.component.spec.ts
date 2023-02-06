import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WednesdayPlanComponent } from './wednesday-plan.component';

describe('WednesdayPlanComponent', () => {
  let component: WednesdayPlanComponent;
  let fixture: ComponentFixture<WednesdayPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WednesdayPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WednesdayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
