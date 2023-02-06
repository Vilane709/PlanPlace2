import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCreateCategoryTaskData } from '../../interfaces';
import { ScheduleService } from '../../services/schedule.service'

@Component({
  selector: 'app-dialog-create-category-task',
  templateUrl: './dialog-create-category-task.component.html',
  styleUrls: ['./dialog-create-category-task.component.css']
})
export class DialogCreateCategoryTaskComponent {

	public form = new FormGroup({
		categoryTask: new FormControl<null | string>(null, [Validators.required])
	});

	constructor(
		private dialogRef: MatDialogRef<DialogCreateCategoryTaskComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogCreateCategoryTaskData,
		private scheduleService: ScheduleService
	) {}

	public submitForm(): void {
		const categoryTask = this.form.value.categoryTask as unknown as string;

		this.scheduleService.createCategoryTask(this.data.pathDay, categoryTask);
		this.dialogRef.close(categoryTask);
	}
}
