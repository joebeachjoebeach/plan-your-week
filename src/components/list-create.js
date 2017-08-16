import React from 'react';
import NewTask from '../containers/new-task';
import AllTasks from '../containers/all-tasks';

const ListCreate = () => {
	return (
		<div>
			<NewTask />
			<AllTasks id="all-tasks" />
		</div>
	);
};

export default ListCreate;
