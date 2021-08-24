import { ADD_COLOR_ITEM, SET_CAR, SET_CAR_DESCRIPTION, SET_CAR_IMG, SET_NEW_CAR, TOGGLE_COLOR_CHECKBOX } from "../../types";

const initialState = {
	item: null,
	colorItems: [],
	colorItemCurrentId: 0,
	fillingProcent: 0,
	description: null,
	img: null
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
				...initialState, 
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
		case SET_CAR_DESCRIPTION: {
			return {
				...state,
				description: action.data.text
			}
		}
		case SET_CAR_IMG: {
			return {
				...state,
				img: action.data.img
			}
		}
		default: return state;
	}
}

export default car;