import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';

export const TodosScreen = () => {
	const { todoState } = useSelector((state) => state.todo);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoState));
	}, [todoState]);

	return (
		<div>
			<hr />
			<h3>Lista de tareas</h3>
			<ol>
				{todoState.map((todos, idx) => (
					<Todo key={idx} {...todos} />
				))}
			</ol>
		</div>
	);
};
