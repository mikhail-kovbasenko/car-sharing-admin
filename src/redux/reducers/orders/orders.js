import { defaultPageSettings } from "../../../utils/defaultPageSettings";
import { SET_CURRENT_PAGE, SET_ORDERS, SET_ORDERS_COUNT } from "../../types";

const initialState = {...defaultPageSettings}

const orders = (state = initialState, action) => {
	switch(action.type) {
		case SET_ORDERS_COUNT: {
			return {
				...state,
				itemsCount: action.data.count
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.data.page
			}
		}
		case SET_ORDERS: {
			return {
				...state,
				items: action.data.data
			}
		}
		default: return state;
	} 
}

export default orders;