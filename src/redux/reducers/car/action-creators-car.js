import { mainAPI } from "../../../api/api";
import { ADD_COLOR_ITEM, SET_CAR, SET_NEW_CAR, TOGGLE_COLOR_CHECKBOX } from "../../types";
import { toggleIsFetchingContentActionCreator } from "../app/action-creators-app";

const setCarActionCreator = data => ({
	type: SET_CAR,
	data: {data}
})
export const setNewCarActionCreator = () => ({type: SET_NEW_CAR});
export const addNewColorItemActionCreator = item => ({
	type: ADD_COLOR_ITEM,
	data: {item}
})
export const toggleColorCheckboxActionCreator = value => ({
	type: TOGGLE_COLOR_CHECKBOX,
	data: {value}
})

export const getCarById = (token, id, handleError) => dispatch => {
	dispatch(toggleIsFetchingContentActionCreator(true));

	mainAPI.getCar(token, id).then(response => {
		if(response.status === 200) {
			dispatch(setCarActionCreator(response.data.data));
			dispatch(toggleIsFetchingContentActionCreator(false));
		}
	}, error => handleError(error))
}
