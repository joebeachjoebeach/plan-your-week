import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dropTask } from '../actions/index';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../helpers/constants';
import Task from '../components/task';

class TaskDraggable extends React.Component {
	render() {
		const { connectDragSource, isDragging } = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectDragSource(
			<div>
				<Task
					task={this.props.task}
					time={this.props.time}
					deletable={false}
					draggable={true}
					opacity={opacity}
				/>
			</div>
		);
	}
}

const taskSource = {
	beginDrag(props) {
		const { id, task, time } = props;
		return { id, task, time };
	},

	isDragging(props, monitor) {
		return monitor.getItem().id === props.id;
	},

	endDrag(props, monitor) {
		if (monitor.didDrop()) {
			const { id, task, time, source, dropTask } = props;
			const { target } = monitor.getDropResult();
			dropTask({ id, task, time, target, source });
		}
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ dropTask }, dispatch);
}

const DS_TaskDraggable = DragSource(ItemTypes.TASK, taskSource, collect)(TaskDraggable);

export default connect(null, mapDispatchToProps)(DS_TaskDraggable);
