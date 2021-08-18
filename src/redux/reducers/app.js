import { TOGGLE_IS_ERROR, TOGGLE_IS_FETCHING, TOGGLE_IS_FETCHING_CONTENT, TOGGLE_MODAL } from "../types";

const initialState = {
	isModalOpen: false,
	isFetching: false,
	isFetchingContent: false,
}

const app = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_MODAL: {
			return {
				...state,
				isModalOpen: !state.isModalOpen
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.data.bool
			}
		}
		case TOGGLE_IS_FETCHING_CONTENT: {
			return {
				...state,
				isFetchingContent: action.data.bool
			}
		}
		default: return state;
	}
}

export const toggleModalActionCreator = () => ({type: TOGGLE_MODAL});
export const toggleIsFetchingActionCreator = bool => ({
	type: TOGGLE_IS_FETCHING,
	data: {bool}
})
export const toggleIsFetchingContentActionCreator = bool => ({
	type: TOGGLE_IS_FETCHING_CONTENT,
	data: {bool}
})


export default app;