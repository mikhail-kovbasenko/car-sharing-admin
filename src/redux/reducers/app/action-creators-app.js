import { TOGGLE_IS_FETCHING, TOGGLE_IS_FETCHING_CONTENT, TOGGLE_MODAL } from "../../types";

export const toggleModalActionCreator = () => ({type: TOGGLE_MODAL});
export const toggleIsFetchingActionCreator = bool => ({
	type: TOGGLE_IS_FETCHING,
	data: {bool}
})
export const toggleIsFetchingContentActionCreator = bool => ({
	type: TOGGLE_IS_FETCHING_CONTENT,
	data: {bool}
})

