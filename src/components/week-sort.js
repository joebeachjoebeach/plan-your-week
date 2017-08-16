import React from 'react';
import AllTasks from '../containers/all-tasks';
import WeekColumn from './week-column';

class WeekSort extends React.Component {
	render() {
		return (
			<div id="week-sort">
				<div id="week-sort-left">
					<AllTasks id="all-tasks-column" />
				</div>
				<WeekColumn />
			</div>
		);
	}
}

export default WeekSort;
