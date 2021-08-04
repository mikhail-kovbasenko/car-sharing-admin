import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import app from "./reducers/app";
import sidebar from './reducers/sidebar';

const reducers = combineReducers({
	auth,
	app,
	sidebar
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;