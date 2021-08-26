import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import app from "./reducers/app";
import sidebar from './reducers/sidebar';
import orders from './reducers/orders';
import cars from './reducers/cars';
import car from './reducers/car';

const reducers = combineReducers({
	auth,
	app,
	sidebar,
	orders,
	cars,
	car
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;