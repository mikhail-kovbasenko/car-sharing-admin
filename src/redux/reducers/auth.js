import authAPI from "../../api/api";
import { SET_IS_AUTH, TOGGLE_LOGIN_ERROR } from "../types";
import { toggleModalActionCreator } from "./app";

const initialState = {
	isAuth: false,
	access: null,
	refresh: null,
	user_id: null,
	loginError: false,
};

const auth = (state = initialState, action) => {
	switch(action.type) {
		case SET_IS_AUTH: {
			const {user_id, access, refresh} = action.data;

			return {
				...state,
				isAuth: true,
				access,
				refresh,
				user_id
			}
		}
		case TOGGLE_LOGIN_ERROR: {
			return {
				...state,
				loginError: !state.loginError
			}
		}
		default: return state;
	}
}

const setAuthorizeUserActionCreator = (user_id, access, refresh) => ({
	type: SET_IS_AUTH,
	data: {user_id, access, refresh}
})
export const toggleLoginErrorActionCreator = () => ({type: TOGGLE_LOGIN_ERROR});

export const setAuthData = data => dispatch => {
	authAPI.authorizeAdmin(data).then(response => {
		if(response.status === 200) {
			const {user_id, access_token:access, refresh_token:refresh} = response.data;

			dispatch(setAuthorizeUserActionCreator(user_id, access, refresh));
			dispatch(toggleModalActionCreator());
		}
	}).catch(error => {
		dispatch(toggleModalActionCreator());
		dispatch(toggleLoginErrorActionCreator());
	})
}

export default auth;