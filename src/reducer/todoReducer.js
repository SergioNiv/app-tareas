import { initialState } from '../helpers/initialState';
import { types } from '../types/types';

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addNewTodo:
			return {
				...state,
				todoState: [
					...state.todoState,
					{
						text: action.payload,
						complete: true,
					},
				],
			};

		case types.deleteTodo:
			return {
				...state,
				todoState: [
					...state.todoState.filter((todos) => todos.text !== action.payload),
				],
			};

		case types.completeTodo:
			const deleteComplete = () => {
				for (let i = 0; i < state.todoState.length; i++) {
					if (state.todoState[i].text === action.payload) {
						state.todoState[i].complete = !state.todoState[i].complete;
					}
				}
				return [...state.todoState];
			};
			return {
				...state,
				todoState: deleteComplete(),
			};
		default:
			return state;
	}
};
