import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DialogSetTaskData, TimeObj } from '../../interfaces';
import { ScheduleService } from '../../services/schedule.service';

@UntilDestroy()
@Component({
  selector: 'app-dialog-set-task',
  templateUrl: './dialog-set-task.component.html',
  styleUrls: ['./dialog-set-task.component.css']
})
export class DialogSetTaskComponent implements OnInit {

	public form = new FormGroup({
		start: new FormControl(null, [Validators.required]),
		end: new FormControl(null, [Validators.required])
	});

	public formValid = false;

  constructor(
		private dialogRef: MatDialogRef<DialogSetTaskComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogSetTaskData,
		private scheduleService: ScheduleService
	) { }

  ngOnInit(): void {
		this.form.valueChanges
		.pipe(
			untilDestroyed(this)
		)
		.subscribe(value => {
			const timeObj = this.form.value as unknown as TimeObj;

			this.formValid = this.compareTimes(timeObj);
		});
  }

	public submitForm(): void {
		const timeObj = this.form.value as unknown as TimeObj;

		this.scheduleService.addTaskTime(this.data.pathDay, {
			task: this.data.task,
			start: timeObj.start,
			end: timeObj.end
		});

		this.dialogRef.close(timeObj);
	}

	private compareTimes(timeObj: TimeObj): boolean {
		const start = new Date("1970-01-01 " + timeObj.start + ":00").getTime();
		const end = new Date("1970-01-01 " + timeObj.end + ":00").getTime();

		return start < end;
	}

}
