import { SET_DAY_TIME, DROP_TASK } from '../actions/index';

const initState = {
	Sunday: { time: 3, tasks: {}, timeLeft: 3 },
	Monday: { time: 3, tasks: {}, timeLeft: 3 },
	Tuesday: { time: 3, tasks: {}, timeLeft: 3 },
	Wednesday: { time: 3, tasks: {}, timeLeft: 3 },
	Thursday: { time: 3, tasks: {}, timeLeft: 3 },
	Friday: { time: 3, tasks: {}, timeLeft: 3 },
	Saturday: { time: 3, tasks: {}, timeLeft: 3 }
};

export default function(state = initState, action) {
	switch (action.type) {
	case SET_DAY_TIME:
		return Object.keys(state).reduce((result, current) => {
			if (action.payload.day === current) {
				const changeInTime = action.payload.time - state[current].time;
				result[current] = {};
				result[current].time = action.payload.time;
				// if the starting time/timeLeft are equal, then they should continue to be equal
				if (state[current].time === state[current].timeLeft) {
					result[current].timeLeft = action.payload.time;
				}
				// otherwise, adjust the time left by the change in time
				else {
					result[current].timeLeft = state[current].timeLeft + changeInTime;
				}
				result[current].tasks = Object.assign(state[current].tasks);
			}
			else {
				result[current] = state[current];
			}
			return result;
		}, {});

	case DROP_TASK:
		if (action.payload.source !== action.payload.target) {
			return Object.keys(state).reduce((result, current) => {
				// add the task to the target day
				if (action.payload.target === current) {
					result[current] = {
						tasks: Object.assign({}, state[current].tasks),
						time: state[current].time,
						timeLeft: Number(state[current].timeLeft) - Number(action.payload.time)
					};
					result[current].tasks[action.payload.id] = {
						task: action.payload.task,
						time: action.payload.time
					};
				}
				// remove the task from the source day
				else if (action.payload.source === current) {
					result[current] = {
						tasks: Object.assign({}, state[current].tasks),
						time: state[current].time,
						timeLeft: Number(state[current].timeLeft) + Number(action.payload.time)
					};
					delete result[current].tasks[action.payload.id];
				}
				else {
					result[current] = state[current];
				}
				return result;
			}, {});
		}
		else {
			return state;
		}

	default:
		return state;
	}
}
