import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../actions/actionTodo';

export const Todo = ({ text, complete }) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteTodo(text));
	};

	const handleComplete = () => {
		dispatch(completeTodo(text));
	};

	return (
		<li className={`${complete || 'tachado'}`}>
			<i
				className="fas fa-trash-alt me-1 ms-2  btn btn-danger mt-1"
				onClick={handleDelete}
			></i>

			{complete ? (
				<i
					className="far fa-check-square me-3 btn btn-success mt-1"
					onClick={handleComplete}
				></i>
			) : (
				<i
					className="far fa-times-circle me-3 btn btn-danger mt-1"
					onClick={handleComplete}
				></i>
			)}

			{/* <i className="far fa-times-circle me-2 btn btn-danger mt-1"></i> */}
			{text}
		</li>
	);
};
