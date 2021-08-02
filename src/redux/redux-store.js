import { combineReducers, createStore } from "redux";
import auth from "./reducers/auth";

const reducers = combineReducers({
	auth
}
);
const store = createStore(reducers);

window.store = store;

export default store;