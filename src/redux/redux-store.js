import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import app from "./reducers/app";

const reducers = combineReducers({
	auth,
	app
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;