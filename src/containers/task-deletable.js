import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../actions/index';
import Task from '../components/task';

class TaskDeletable extends React.Component {
	handleDeleteClick() {
		this.props.deleteTask(this.props.id);
	}

	render() {
		return (
			<div>
				<Task
					task={this.props.task}
					time={this.props.time}
					onDeleteClick={this.handleDeleteClick.bind(this)}
					deletable={true}
					draggable={false}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(TaskDeletable);
