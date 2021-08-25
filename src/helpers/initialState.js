export const initialState = {
	todoState: JSON.parse(localStorage.getItem('todos')) || [],
};
