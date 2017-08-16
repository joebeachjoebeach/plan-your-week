import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import HeaderNav from './header-nav';
import Guide from '../containers/guide';
import ListCreate from './list-create';
import WeekBudget from './week-page';
import WeekSort from './week-sort';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<header>
						<div id="header-title">
							Plan Your Week
						</div>
						<HeaderNav />
					</header>
					<div id="container">
						<Guide />
						<Switch>
							<Route path={process.env.PUBLIC_URL + '/weeksort'} component={WeekSort} />
							<Route path={process.env.PUBLIC_URL + '/week'} component={WeekBudget} />
							<Route exact path={process.env.PUBLIC_URL + '/'} component={ListCreate} />
						</Switch>	
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default DragDropContext(HTML5Backend)(App);
