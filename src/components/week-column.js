import React from 'react';
import DaySort from '../containers/day-sort';

const WeekColumn = () => {
	return (
		<div id="week-column">
			<DaySort name="Sunday" />
			<DaySort name="Monday" />
			<DaySort name="Tuesday" />
			<DaySort name="Wednesday" />
			<DaySort name="Thursday" />
			<DaySort name="Friday" />
			<DaySort name="Saturday" />
		</div>
	);
};

export default WeekColumn;
