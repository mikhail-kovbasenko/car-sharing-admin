import { mainAPI } from "../../api/api";
import { defaultPageSettings } from "../../utils/defaultPageSettings";
import { SET_CARS, SET_CARS_COUNT, SET_CURRENT_PAGE_CAR } from "../types";
import { toggleIsFetchingActionCreator, toggleIsFetchingContentActionCreator } from "./app";

const initialState = {...defaultPageSettings};

const cars = (state = initialState, action) => {
	switch(action.type) {
		case SET_CARS: {
			return {
				...state,
				items: action.data.data
			}
		}
		case SET_CARS_COUNT: {
			return {
				...state,
				itemsCount: action.data.count
			}
		}
		case SET_CURRENT_PAGE_CAR: {
			return {
				...state,
				currentPage: action.data.page
			}
		}
		default: return state;
	}
}

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

export const getCarsFromServer = (token, limit, page, preloader = false) => dispatch => {
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
	})
}

export default cars;