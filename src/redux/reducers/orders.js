import { mainAPI } from "../../api/api";
import { SET_CURRENT_PAGE, SET_ORDERS, SET_ORDERS_COUNT } from "../types";
import { toggleIsFetchingActionCreator } from "./app";

const initialState = {
	items: null,
	itemsCount: 0,
	itemsOnPage: 10,
	currentPage: 1
}

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

const setItemsCountActionCreator = count => ({
	type: SET_ORDERS_COUNT,
	data: {count}
})
const setOrdersActionCreator = data => ({
	type: SET_ORDERS,
	data: {data}
})
const setCurrentPageActionCreator = page => ({
	type: SET_CURRENT_PAGE,
	data: {page}
})

export const getOrdersFromServer = (token, limit, page) => dispatch => {
	dispatch(toggleIsFetchingActionCreator(true));
	dispatch(setCurrentPageActionCreator(page));

	mainAPI.getOrders(token, limit, page).then(response => {
		if(response.status === 200) {
			console.log(response);
			dispatch(setItemsCountActionCreator(response.data.count));
			dispatch(setOrdersActionCreator(response.data.data));
			dispatch(toggleIsFetchingActionCreator(false));
		}
	})
}

export default orders;