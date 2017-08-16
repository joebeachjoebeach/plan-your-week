import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from '../components/slider';
import { createTask } from '../actions/index';

class NewTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = { task: '', time: '1' };

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTextChange(event) {
		this.setState({ task: event.target.value });
	}

	handleTimeChange(event) {
		this.setState({ time: event.target.value });
	}

	handleSubmit(event) {
		const { task, time } = this.state;
		event.preventDefault();
		if (task !== '') {
			this.props.createTask({ task, time });
			this.setState({ task: '' });
		}
	}

	render() {
		return (
			<div id="new-task">
				<form onSubmit={this.handleSubmit} id="new-task-form">
					<input
						id="new-task-form-textinput"
						placeholder="What do you want to do this week?"
						value={this.state.task}
						onChange={this.handleTextChange}
					/>
					<Slider
						onTimeChange={this.handleTimeChange.bind(this)}
						type="new-task"
						time={this.state.time}
						min="0.25"
						max="8"
						step="0.25"
					/>
					<button id="new-task-form-button" type="submit">Add</button>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewTask);

