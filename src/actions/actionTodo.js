import { types } from '../types/types';

export const addNewTodo = (newTodo) => ({
	type: types.addNewTodo,
	payload: newTodo,
});

export const deleteTodo = (todo) => ({
	type: types.deleteTodo,
	payload: todo,
});

export const completeTodo = (todo) => ({
	type: types.completeTodo,
	payload: todo,
});
