import { createStore, combineReducers } from 'redux';
import { todoReducer } from '../reducer/todoReducer';

const reducers = combineReducers({
	todo: todoReducer,
});
export const store = createStore(
	reducers /* preloadedState, */,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
