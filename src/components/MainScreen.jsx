import React from 'react';
import { TodoSearch } from './TodoSearch';
import { TodosScreen } from './TodosScreen';

export const MainScreen = () => {
	return (
		<div>
			<h1>Mis tareas Pendientes</h1>
			<hr />
			<TodoSearch />
			<TodosScreen />
		</div>
	);
};
