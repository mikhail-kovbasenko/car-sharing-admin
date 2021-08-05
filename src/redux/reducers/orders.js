import { mainAPI } from "../../api/api";

const initialState = {

}

const orders = (state = initialState, action) => {
	switch(action.type) {
		default: return state;
	} 
}

export const getOrdersFromServer = () => dispatch => {
	mainAPI.getOrders().then(response => {
		console.log(response);
	})
}

export default orders;