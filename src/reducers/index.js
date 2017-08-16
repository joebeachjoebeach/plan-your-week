import { combineReducers } from 'redux';
import TodoListReducer from './reducer-todo-list';
import WeekReducer from './reducer-week';

const rootReducer = combineReducers({
	todoList: TodoListReducer,
	week: WeekReducer
});

export default rootReducer;
