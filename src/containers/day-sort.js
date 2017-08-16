import React from 'react';
import { connect } from 'react-redux';
import { idiomaticTime } from '../helpers/functions';
import { ItemTypes } from '../helpers/constants';
import { DropTarget } from 'react-dnd';
import TaskDraggable from './task-draggable';

class DaySort extends React.Component {
	constructor(props) {
		super(props);

		this.renderProgress = this.renderProgress.bind(this);
		this.renderList = this.renderList.bind(this);
	}

	renderProgress() {
		const { time, timeLeft } = this.props;
		const percentage = ((time - timeLeft) / time) * 100;

		return (
			<div className="day-sort-header-info-progress">
				<div
					className="day-sort-header-info-progress-value"
					style={{width: `${percentage}%`}}
				>
				</div>
			</div>
		);
	}

	renderList(id) {
		const { tasks } = this.props;
		return (
			<TaskDraggable
				key={id}
				id={id}
				task={tasks[id].task}
				time={tasks[id].time}
				source={this.props.name}
			/>
		);
	}

	render() {
		const { connectDropTarget, tasks, name, timeLeft } = this.props;

		return connectDropTarget(
			<div className="day-sort">
				<div className="day-sort-header">
					<div className="day-sort-header-title">
						{name}
					</div>
					<div className="day-sort-header-info">
						<div className="day-sort-header-info-text">
							{idiomaticTime(timeLeft)} left
						</div>
						{this.renderProgress()}
					</div>
				</div>
				<div 
					className="day-sort-tasks"
				>
					{Object.keys(tasks).map(this.renderList)}
				</div>
			</div>
		);
	}
}

const daySortTarget = {
	drop(props) {
		return { target: props.name };
	},

	canDrop({ timeLeft }, monitor) {
		const itemTime = Number(monitor.getItem().time);
		return timeLeft >= itemTime;
	}
};

function collect(connect) {
	return {
		connectDropTarget: connect.dropTarget(),
	};
}

function mapStateToProps({ week }, { name }) {
	return { time: week[name].time, tasks: week[name].tasks, timeLeft: week[name].timeLeft };
}

const DT_DaySort = DropTarget(ItemTypes.TASK, daySortTarget, collect)(DaySort);

export default connect(mapStateToProps)(DT_DaySort);
