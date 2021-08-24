import { ADD_COLOR_ITEM, SET_CAR, SET_NEW_CAR, TOGGLE_COLOR_CHECKBOX } from "../../types";

const initialState = {
	item: null,
	colorItems: [],
	colorItemCurrentId: 0,
	fillingProcent: 0,
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
		case TOGGLE_COLOR_CHECKBOX: {
			const colorItems = state.colorItems.map(item => {
				if(item.value === action.data.value) item.checked = !item.checked;

				return item;
			})
			return {
				...state,
				colorItems
			}
		}
		default: return state;
	}
}

export default car;