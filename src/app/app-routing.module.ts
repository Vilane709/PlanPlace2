import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FridayPlanComponent } from './friday-plan/friday-plan.component';
import { MondayPlanComponent } from './monday-plan/monday-plan.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { SaturdayPlanComponent } from './saturday-plan/saturday-plan.component';
import { ScheduleComponent } from './shared/components/schedule/schedule.component';
import { ViewDayComponent } from './shared/components/view-day/view-day.component';
import { ScheduleGuard } from './shared/guards/schedule.guard';
import { SundayPlanComponent } from './sunday-plan/sunday-plan.component';
import { ThursdayPlanComponent } from './thursday-plan/thursday-plan.component';
import { TuesdayPlanComponent } from './tuesday-plan/tuesday-plan.component';
import { WednesdayPlanComponent } from './wednesday-plan/wednesday-plan.component';

const routes: Routes = [
  { path: '', component: PageMainComponent, children: [
    { path: '', redirectTo: 'day/mon', pathMatch: 'full' },

    // { path: 'mon', component: MondayPlanComponent },
    // { path: 'tue', component: TuesdayPlanComponent },
    // { path: 'wed', component: WednesdayPlanComponent },
    // { path: 'thu', component: ThursdayPlanComponent },
    // { path: 'fri', component: FridayPlanComponent },
    // { path: 'sat', component: SaturdayPlanComponent },
    // { path: 'sun', component: SundayPlanComponent },
		{ path: 'day', redirectTo: 'day/mon', pathMatch: 'full' },
    { path: 'day/:weekday', component: ViewDayComponent, canActivate: [ScheduleGuard] }
  ] },

  { path: '**', redirectTo: 'mon', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


console.log(2);
