import { ADD_COLOR_ITEM, SET_CAR, SET_CAR_DESCRIPTION, SET_CAR_IMG, SET_CATEGORIES, SET_COLOR_ITEMS, SET_NEW_CAR, SET_SAVED_CAR, TOGGLE_COLOR_CHECKBOX } from "../../types";

const initialState = {
	item: null,
	colorItems: [],
	colorItemCurrentId: 0,
	fillingProcent: 0,
	description: null,
	img: null,
	categoriesList: [],
	carSaved: false
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
				if(item.id === action.data.id) item.checked = !item.checked;

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
		case SET_CATEGORIES: {
			return {
				...state,
				categoriesList: action.data.data
			}
		}
		case SET_SAVED_CAR: {
			return {
				...state,
				carSaved: action.data.bool
			}
		}
		case SET_COLOR_ITEMS: {
			console.log(action.data.data);
			const colorItems = action.data.data.map((item, index) => {
				return {
					id: index,
					name: item,
					checked: true
				}
			})
			return {
				...state,
				colorItems,
				colorItemCurrentId: colorItems.length
			}
		}
		default: return state;
	}
}

export default car;