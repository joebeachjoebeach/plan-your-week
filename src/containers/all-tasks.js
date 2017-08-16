import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../helpers/constants';
import TaskDeletable from './task-deletable';
import TaskDraggable from './task-draggable';

class AllTasks extends React.Component {
	renderList(id) {
		const { tasks } = this.props.todoList;
		
		if (this.props.id === 'all-tasks') {
			return (
				<TaskDeletable
					key={id}
					id={id}
					task={tasks[id].task}
					time={tasks[id].time}
				/>
			);
		}
		else if (this.props.id === 'all-tasks-column') {
			return (
				<TaskDraggable
					key={id}
					id={id}
					task={tasks[id].task}
					time={tasks[id].time}
					source="all"
				/>
			);
		}
	}

	renderIcon() {
		return (
			<div id="all-tasks-empty-list">
				<img alt="list icon" src="./images/list.png" />
				<div id="all-tasks-empty-list-text">
					Your list is empty.
					<br />
					Start adding items to see it grow.
				</div>
			</div>
		);
	}

	render() {
		const { connectDropTarget, todoList, id } = this.props;
		const taskKeys = Object.keys(todoList.tasks);

		return connectDropTarget(
			<div id={id}>
				{taskKeys.map(this.renderList.bind(this))}
				{id === 'all-tasks' && taskKeys.length === 0 && this.renderIcon()}
			</div>
		);
	}
}

const allTasksTarget = {
	drop() {
		return { target: 'all' };
	},
};

function collect(connect) {
	return {
		connectDropTarget: connect.dropTarget(),
	};
}

function mapStateToProps({ todoList }) {
	return { todoList };
}

const DT_AllTasks = DropTarget(ItemTypes.TASK, allTasksTarget, collect)(AllTasks);

export default connect(mapStateToProps)(DT_AllTasks);
