import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/auth/auth";
import app from "./reducers/app/app";
import sidebar from './reducers/sidebar/sidebar';
import orders from './reducers/orders/orders';
import cars from './reducers/cars/cars';
import car from './reducers/car/car';

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