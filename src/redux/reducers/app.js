import { TOGGLE_MODAL } from "../types";

const initialState = {
	isModalOpen: false
}

const app = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_MODAL: {
			return {
				isModalOpen: !state.isModalOpen
			}
		}
		default: return state;
	}
}

export const toggleModalActionCreator = () => ({type: TOGGLE_MODAL});

export default app;