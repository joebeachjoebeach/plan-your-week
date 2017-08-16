export const CREATE_TASK = 'create_task';
export const DELETE_TASK = 'delete_task';
export const SET_DAY_TIME = 'set_day_time';
export const DROP_TASK = 'drop_task';
export const DRAG_TASK = 'drag_task';
 
export function createTask(entry) {
	return {
		type: CREATE_TASK,
		payload: entry
	};
}

export function deleteTask(id) {
	return {
		type: DELETE_TASK,
		payload: id
	};
}

export function setDayTime(info) {
	return {
		type: SET_DAY_TIME,
		payload: info
	};
}

export function dragTask(data) {
	return {
		type: DRAG_TASK,
		payload: data
	};
}

export function dropTask(data) {
	return {
		type: DROP_TASK,
		payload: data
	};
}
