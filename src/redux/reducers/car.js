import { mainAPI } from "../../api/api";
import { ADD_COLOR_ITEM, SET_CAR, SET_NEW_CAR } from "../types";

const initialState = {
	item: null,
	colorItems: [],
	colorItemCurrentId: 0
}

const car = (state = initialState, action) => {
	switch(action.type) {
		case SET_CAR: {
			return {
				...state,
				item: action.data.data
			}
		}
		case SET_NEW_CAR: {
			return {
				...state,
				item: []
			}
		}
		case ADD_COLOR_ITEM: {
			const colorItems = [...state.colorItems, action.data.item];
			return {
				...state,
				colorItems,
				colorItemCurrentId: state.colorItemCurrentId + 1
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
export const addNewColorItemActionCreator = item => ({
	type: ADD_COLOR_ITEM,
	data: {item}
})

export const getCarById = (token, id, handleError) => dispatch => {
	mainAPI.getCar(token, id).then(response => {
		if(response.status === 200) {
			dispatch(setCarActionCreator(response.data.data));
		}
	}, error => handleError(error))
}

export default car;