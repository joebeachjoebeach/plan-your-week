import { CREATE_TASK, DELETE_TASK, DROP_TASK } from '../actions/index';

export default function(state = { tasks: {}, current: 0 }, action) {
	let { current } = state;
	let taskOmitted;

	switch (action.type) {
	case CREATE_TASK:
		current++;
		return { tasks: Object.assign({}, state.tasks, { [current]: action.payload }), current };

	case DELETE_TASK:
		taskOmitted = Object.keys(state.tasks).reduce((result, key) => {
			if (key !== action.payload) {
				result[key] = state.tasks[key];
			}
			return result;
		}, {});
		return { tasks: taskOmitted, current };

	case DROP_TASK:
		if (action.payload.source === 'all' && action.payload.target !== 'all') {
			taskOmitted = Object.keys(state.tasks).reduce((result, key) => {
				if (key !== action.payload.id) {
					result[key] = state.tasks[key];
				}
				return result;
			}, {});
			return { tasks: taskOmitted, current };
		}
		else if (action.payload.target === 'all') {
			return {
				tasks: Object.assign({}, state.tasks, {
					[action.payload.id]: {
						task: action.payload.task,
						time: action.payload.time
					}
				}),
				current
			};
		}
		else {
			return state;
		}
		
	default:
		return state;
	}
}
