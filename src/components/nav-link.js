import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ pathName, linkName, linkPath }) => {
	const addedClass = pathName === linkPath ? 'header-nav-link header-nav-link-active' : 'header-nav-link';
	return (
		<div className={addedClass}>
			<Link to={linkPath}>{linkName}</Link>
		</div>
	);
};

export default NavLink;
