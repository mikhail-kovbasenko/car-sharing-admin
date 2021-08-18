import { mainAPI } from "../../api/api";
import { SET_CAR, SET_NEW_CAR } from "../types";

const initialState = {
	item: null
}

const car = (state = initialState, action) => {
	switch(action.type) {
		case SET_CAR: {
			return {
				item: action.data.data
			}
		}
		case SET_NEW_CAR: {
			return {
				item: []
			}
		}
		default: return state;
	}
}

const setCarActionCreator = data => ({
	type: SET_CAR,
	data: {data}
})
export const setNewCarActionCreator = () => ({type: SET_NEW_CAR});

export const getCarById = (token, id, handleError) => dispatch => {
	mainAPI.getCar(token, id).then(response => {
		if(response.status === 200) {
			dispatch(setCarActionCreator(response.data.data));
		}
	}, error => handleError(error))
}

export default car;