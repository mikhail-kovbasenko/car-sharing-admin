import { mainAPI } from "../../../api/api";
import { SET_CARS, SET_CARS_COUNT, SET_CURRENT_PAGE_CAR } from "../../types";
import { toggleIsFetchingActionCreator, toggleIsFetchingContentActionCreator } from "../app/action-creators-app";

const setCarsActionCreator = data => ({
	type: SET_CARS,
	data: {data}
})
const setCarsCountActionCreator = count => ({
	type: SET_CARS_COUNT,
	data: {count}
})
const setCurrentPageCarActionCreator = page => ({
	type: SET_CURRENT_PAGE_CAR,
	data: {page}
})
export const getCarsFromServer = (handleError, token, limit, page, preloader = false) => dispatch => {
	if(!preloader) {
		dispatch(toggleIsFetchingActionCreator(true));
	} else {
		dispatch(toggleIsFetchingContentActionCreator(true));
	}
	dispatch(setCurrentPageCarActionCreator(page));
	mainAPI.getCars(token, limit, page).then(response => {
		if(response.status === 200) {		
			dispatch(setCarsActionCreator(response.data.data));
			dispatch(setCarsCountActionCreator(response.data.count));
			dispatch(toggleIsFetchingActionCreator(false));
			dispatch(toggleIsFetchingContentActionCreator(false));
		}
	}, error => handleError(error))
}

