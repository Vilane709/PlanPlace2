import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { take } from 'rxjs';
import { DialogCreateCategoryTaskData, DialogSetTaskData, Schedule, TimeObj } from '../../interfaces';
import { ScheduleService } from '../../services/schedule.service';
import { DialogSetTaskComponent } from '../dialog-set-task/dialog-set-task.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DialogCreateCategoryTaskComponent } from '../dialog-create-category-task/dialog-create-category-task.component';

@UntilDestroy()
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public schedule: Schedule[] = this.scheduleService.getSchedule();
  public routeDay: string | null = this.route.snapshot.paramMap.get('weekday');
  public tasks: string[] = [];
	private maxWidthDialog: number = 400;
	private minWidthDialog: number = 400;
	private widthDialog: string = 'calc(100% - 20px)';

	// private routeDay$: Observable<string> = this.route.paramMap.pipe(
	// 	untilDestroyed(this),
	// 	switchMap(params => {
	// 		const routeDay = params.get('weekday');
	// 		if (routeDay === null) {
	// 			throw 'Не удалось получить weekday из url';
	// 		}
	// 		return of(routeDay);
	// 	})
	// );

  constructor(
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef
  ) { }

  public activeDay(pathDay: string): boolean {
    return this.routeDay === pathDay;
  }

  public routerClick(pathDay: string): void {
    this.router.navigate(['day', pathDay]);
  }

  public openDialogCreateTask(task: string, pathDay: string): void {
    const dialogRef = this.dialog.open(DialogSetTaskComponent, {
      maxWidth: this.maxWidthDialog,
      minWidth: this.minWidthDialog,
			width: this.widthDialog,
      viewContainerRef: this.viewContainerRef,
			data: { task, pathDay } as DialogSetTaskData
    });
  }

	public openDialogCreateCategoryTask(pathDay: string): void {
		const dialogRef = this.dialog.open(DialogCreateCategoryTaskComponent, {
      maxWidth: this.maxWidthDialog,
      minWidth: this.minWidthDialog,
			width: this.widthDialog,
      viewContainerRef: this.viewContainerRef,
			data: { pathDay } as DialogCreateCategoryTaskData
    });
	}

  ngOnInit(): void {
    this.route.paramMap
		.pipe(
			untilDestroyed(this)
		)
		.subscribe(params => {
      this.routeDay = params.get('weekday');
      if (this.routeDay !== null) {
        this.tasks = this.scheduleService.getCategoryTasksByDay(this.routeDay);
      }
    });
  }



}
