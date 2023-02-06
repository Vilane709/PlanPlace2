import { NewTaskTime, ScheduleTime } from "../interfaces";

export class TaskTime implements ScheduleTime {
	id: string;
	start: string;
	end: string;
	task: string;

	constructor(newTaskTime: NewTaskTime) {
		this.start = newTaskTime.start;
		this.task = newTaskTime.task;
		this.end = newTaskTime.end;
		this.id = window.crypto.randomUUID();
	}

}
