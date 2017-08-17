import React from 'react';
import { withRouter } from 'react-router-dom';
import NavLink from './nav-link';

const HeaderNav = ({ location: { pathname } }) => {
	return (
		<div id="header-nav">
			<NavLink
				pathName={pathname}
				linkName="To-do List"
				linkPath={process.env.PUBLIC_URL + '/'}
			/>
			<NavLink
				pathName={pathname}
				linkName="Daily Budget"
				linkPath={process.env.PUBLIC_URL + '/week'}
			/>
			<NavLink
				pathName={pathname}
				linkName="Sort"
				linkPath={process.env.PUBLIC_URL + '/weeksort'}
			/>
		</div>
	);
};

export default withRouter(HeaderNav);
