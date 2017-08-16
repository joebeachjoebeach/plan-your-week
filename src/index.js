import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import App from './components/app.js';
import { loadState, saveState } from './helpers/local-storage';
import throttle from 'lodash/throttle';

import './index.css';

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 1000));

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		, document.querySelector('#root'));
	registerServiceWorker();
});

