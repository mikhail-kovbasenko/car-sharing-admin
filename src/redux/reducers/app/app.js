import { TOGGLE_IS_FETCHING, TOGGLE_IS_FETCHING_CONTENT, TOGGLE_MODAL } from "../../types";

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


export default app;