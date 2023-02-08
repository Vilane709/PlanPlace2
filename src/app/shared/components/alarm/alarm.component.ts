import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, of, Observable } from 'rxjs';
import { TaskTime } from '../../models/TaskTime';

@UntilDestroy()
@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

	public routeDay$: Observable<string> = this.route.paramMap.pipe(
		untilDestroyed(this),
		switchMap(params => {
			const routeDay = params.get('weekday');
			if (routeDay === null) {
				throw 'Не удалось получить weekday из url';
			}
			return of(routeDay);
		})
	);
	public tasksTime$: Observable<TaskTime[]> = this.scheduleService.getTasksTimeByPathDay$(this.routeDay$);

  constructor(
		private route: ActivatedRoute,
		private router: Router,
		private scheduleService: ScheduleService
	) { }

  ngOnInit(): void {

  }

	public deleteTaskTime(pathDay: string, taskTime: TaskTime): void {
		this.scheduleService.deleteTaskTimeByPathDay(pathDay, taskTime);
	}

}
