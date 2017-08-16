import React from 'react';
import DayBudget from '../containers/day-budget';

const WeekBudget = () => {
	return (
		<div id="week-budget">
			<DayBudget name="Sunday" />
			<DayBudget name="Monday" />
			<DayBudget name="Tuesday" />
			<DayBudget name="Wednesday" />
			<DayBudget name="Thursday" />
			<DayBudget name="Friday" />
			<DayBudget name="Saturday" />
		</div>
	);
};

export default WeekBudget;
