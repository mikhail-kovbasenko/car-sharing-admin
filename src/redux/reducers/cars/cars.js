import { mainAPI } from "../../../api/api";
import { defaultPageSettings } from "../../../utils/defaultPageSettings";
import { SET_CARS, SET_CARS_COUNT, SET_CURRENT_PAGE_CAR } from "../../types";
import { toggleIsFetchingActionCreator, toggleIsFetchingContentActionCreator } from "../app/action-creators-app";

const initialState = {...defaultPageSettings, itemsOnPage: 10};

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

export default cars;