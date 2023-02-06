import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayPlanComponent } from './sunday-plan.component';

describe('SundayPlanComponent', () => {
  let component: SundayPlanComponent;
  let fixture: ComponentFixture<SundayPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SundayPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
