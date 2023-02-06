import { TaskTime } from "./models/TaskTime";

export interface Schedule {
	path: string;
	value: string;
	tasks: string[];
	time: TaskTime[];
}

export interface ScheduleTime {
	id: string;
	start: string;
	end: string;
	task: string;
}

export interface DialogSetTaskData {
	task: string;
	pathDay: string;
}

export interface NewTaskTime {
	start: string;
	end: string;
	task: string;
}

export interface TimeObj {
	start: string;
	end: string;
}


export interface DialogCreateCategoryTaskData {
	pathDay: string
}
