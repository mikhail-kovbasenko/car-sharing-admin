import { mainAPI } from "../../../api/api";
import { SET_CURRENT_PAGE, SET_ORDERS, SET_ORDERS_COUNT } from "../../types";
import { toggleIsFetchingActionCreator, toggleIsFetchingContentActionCreator } from "../app/action-creators-app";

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


export const getOrdersFromServer = (handleError, token, limit, page, preloader = false) => dispatch => {
	if(!preloader) {
		dispatch(toggleIsFetchingActionCreator(true));
	} else {
		dispatch(toggleIsFetchingContentActionCreator(true));
	}

	dispatch(setCurrentPageActionCreator(page));

	mainAPI.getOrders(token, limit, page).then(response => {
		if(response.status === 200) {
			dispatch(setItemsCountActionCreator(response.data.count));
			dispatch(setOrdersActionCreator(response.data.data));
			dispatch(toggleIsFetchingActionCreator(false));
			dispatch(toggleIsFetchingContentActionCreator(false));
		}
	}, error => handleError(error))
}

