import React from 'react';
import { withRouter } from 'react-router-dom';
import NavLink from './nav-link';

const HeaderNav = ({ location: { pathname } }) => {
	return (
		<div id="header-nav">
			<NavLink
				pathName={pathname}
				linkName="To-do List"
				linkPath="/"
			/>
			<NavLink
				pathName={pathname}
				linkName="Daily Budget"
				linkPath="/week"
			/>
			<NavLink
				pathName={pathname}
				linkName="Sort"
				linkPath="/weeksort"
			/>
		</div>
	);
};

export default withRouter(HeaderNav);
