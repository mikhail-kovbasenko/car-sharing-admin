import { mainAPI } from "../../../api/api";
import { ADD_COLOR_ITEM, SET_CAR, SET_CAR_DESCRIPTION, SET_CAR_IMG, SET_CATEGORIES, SET_COLOR_ITEMS, SET_NEW_CAR, SET_SAVED_CAR, TOGGLE_COLOR_CHECKBOX } from "../../types";
import { toggleIsFetchingContentActionCreator } from "../app/action-creators-app";

const setCarActionCreator = data => ({
	type: SET_CAR,
	data: {data}
})
const setCategoriesListActionCreator = data => ({
	type: SET_CATEGORIES,
	data: {data}
})
const setSavedCarActionCreator = bool => ({
	type: SET_SAVED_CAR,
	data: {bool}
})
const setColorItemsActionCreator = data => ({
	type: SET_COLOR_ITEMS,
	data: {data}
})
export const setCarDescriptionActionCreator = text => ({
	type: SET_CAR_DESCRIPTION,
	data: {text}
})
export const setCarImgActionCreator = img => ({
	type: SET_CAR_IMG,
	data: {img}
})
export const setNewCarActionCreator = () => ({type: SET_NEW_CAR});
export const addNewColorItemActionCreator = item => ({
	type: ADD_COLOR_ITEM,
	data: {item}
})
export const toggleColorCheckboxActionCreator = id => ({
	type: TOGGLE_COLOR_CHECKBOX,
	data: {id}
})

export const getCarById = (token, id, handleError) => dispatch => {
	dispatch(toggleIsFetchingContentActionCreator(true));

	mainAPI.getCar(token, id).then(response => {
		if(response.status === 200) {
			dispatch(setCarActionCreator(response.data.data));
			dispatch(setCarDescriptionActionCreator(response.data.data.description));
			dispatch(setCarImgActionCreator(response.data.data.thumbnail))
			dispatch(toggleIsFetchingContentActionCreator(false));
			dispatch(setColorItemsActionCreator(response.data.data.colors));
		}
	}, error => handleError(error))
}
export const getCarCategories = token => dispatch => {
	mainAPI.getCategories(token).then(response => {
		if(response.status === 200) {
			dispatch(setCategoriesListActionCreator(response.data.data))
		}
	})
}
export const setNewCarInDatabase = (token, data) => dispatch => {
	dispatch(toggleIsFetchingContentActionCreator(true));

	mainAPI.setNewCar(token, data).then(() => {
		dispatch(toggleIsFetchingContentActionCreator(false));
		dispatch(setSavedCarActionCreator(true));

		setTimeout(() => {
			dispatch(setSavedCarActionCreator(false))
		}, 2000)
	})
}
export const deleteCarById = (token, id) => dispatch => {
	dispatch(toggleIsFetchingContentActionCreator(true));

	mainAPI.deleteCarById(token, id).then(response => {
		if(response.status ===  200) {
			dispatch(toggleIsFetchingContentActionCreator(false));
			dispatch(setNewCarActionCreator([]));
		}
	})
}
export const updateCarById = (token, id, data) => dispatch => {
	dispatch(toggleIsFetchingContentActionCreator(true));

	mainAPI.updateCarById(token, id, data).then(response => {
		if(response.status === 200) {
			dispatch(toggleIsFetchingContentActionCreator(false));
		}
	})
}

