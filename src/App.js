import React from 'react';
import { Provider } from 'react-redux';
import { MainScreen } from './components/MainScreen';
import { store } from './store/store';
import './styles.css';

export const App = () => {
	return (
		<Provider store={store}>
			<MainScreen />
		</Provider>
	);
};
