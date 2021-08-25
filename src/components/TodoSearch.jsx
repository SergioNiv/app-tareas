import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../actions/actionTodo';

export const TodoSearch = () => {
	const dispatch = useDispatch();
	const [formValue, setFormValue] = useState('');

	const handleInputChange = (e) => {
		setFormValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formValue.trim().length < 1) {
			return;
		}
		dispatch(addNewTodo(formValue));
		setFormValue('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Escribe tu tarea"
				className="form-control mb-3"
				value={formValue}
				onChange={handleInputChange}
			/>

			<button className="btn btn-primary" type="submit">
				Agregar tarea
			</button>
		</form>
	);
};
