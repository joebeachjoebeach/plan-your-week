import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Guide extends React.Component {
	// keep track of whether the user has pressed the 'next' button
	// in order to properly display it if they re-navigate back to the first page
	constructor(props) {
		super(props);

		this.state = {
			hasPressedNext: false,
		};
	}

	componentWillReceiveProps({ location: { pathname } }) {
		if (pathname !== '/') {
			this.setState({ hasPressedNext: true, });
		}
	}

	renderPrevious(previous) {
		if (previous) {
			return (
				<Link to={previous}>
					<button id="guide-nextprev-prev">Previous</button>
				</Link>
			);
		}
		return <div id="guide-nextprev-prev" />;
	}

	// display 'next' only once the user has added anything to the list,
	// and keep it displayed on the first page even if they move all the items to days
	// on the third page
	renderNext(pathname, tasks, next) {
		const listContainsItems = Object.keys(tasks).length > 0;
		if (next && (this.state.hasPressedNext || listContainsItems)) {
			return (
				<Link to={next}>
					<button id="guide-nextprev-next">Next</button>
				</Link>
			);
		}
		return <div id="guide-nextprev-next" />;
	}

	render() {
		const { location: { pathname }, todoList: { tasks } } = this.props;
		let next, previous, instructions;

		if (pathname === `${process.env.PUBLIC_URL}/`) {
			next = `${process.env.PUBLIC_URL}/week`;
			previous = null;
			instructions = 'Enter a task and how long you think it will take to do it.';
		}
		else if (pathname === `${process.env.PUBLIC_URL}/week`) {
			next = `${process.env.PUBLIC_URL}/weeksort`;
			previous = `${process.env.PUBLIC_URL}/`;
			instructions = 'Determine how much time you have each day to get things done.';
		}
		else if (pathname === `${process.env.PUBLIC_URL}/weeksort`) {
			next = null;
			previous = `${process.env.PUBLIC_URL}/week`;
			instructions = 'Drag and drop each task into the day when you want to do it.';
		}

		return (
			<div id="guide">
				<div id="guide-instructions">
					{instructions}
				</div>
				<div id="guide-nextprev">
					{this.renderPrevious(previous)}
					{this.renderNext(pathname, tasks, next)}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ todoList }) {
	return { todoList };
}

const c_Guide = connect(mapStateToProps)(Guide);

export default withRouter(c_Guide);
