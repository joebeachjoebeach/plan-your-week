import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from '../components/slider';
import { setDayTime } from '../actions/index';

class DayBudget extends React.Component {
	constructor(props) {
		super(props);

		this.state = { min: props.time - props.timeLeft };
	}

	handleTimeChange(event) {
		this.props.setDayTime({ day: this.props.name, time: Number(event.target.value) });
	}

	render() {
		return (
			<div className="day-budget">
				<div>{this.props.name}</div>
				<Slider
					onTimeChange={this.handleTimeChange.bind(this)}
					type="day"
					time={this.props.time}
					min={this.state.min}
					max="10"
					step="0.25"
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setDayTime }, dispatch);
}

function mapStateToProps({ week }, { name }) {
	return { time: week[name].time, timeLeft: week[name].timeLeft };
}

export default connect(mapStateToProps, mapDispatchToProps)(DayBudget);
