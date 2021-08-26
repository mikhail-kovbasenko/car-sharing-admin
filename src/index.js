import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter basename={'https://mikhail-kovbasenko.github.io/car-sharing-admin/'}>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
