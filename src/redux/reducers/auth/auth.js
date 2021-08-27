import { SET_IS_AUTH, TOGGLE_LOGIN_ERROR } from "../../types";

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

export default auth;