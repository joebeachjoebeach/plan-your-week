import React from 'react';
import { idiomaticTime } from '../helpers/functions';

const Task = (props) => {
	function renderButton() {
		if (props.deletable) {
			return (
				<div className="task-content-delete">
					<button
						className="task-content-delete-button"
						onClick={props.onDeleteClick}
					>&#10005;</button>
				</div>
			);
		}
		else if (props.draggable) {
			return null;
		}
	}

	const { opacity, time, task } = props;

	return (
		<div className="task" style={{ opacity }}>
			<div className="task-time">
				{idiomaticTime(time)}
			</div>
			<div className="task-content">
				<div className="task-content-text">
					{task}
				</div>
				{renderButton()}
			</div>
		</div>
	);
};

export default Task;
