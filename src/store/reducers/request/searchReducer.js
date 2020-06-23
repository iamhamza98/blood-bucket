import {
	SEARCH_SET_REQUESTED_USERS,
	SEARCH_GET_REQUIRED_USERS,
	SEARCH_ERROR,
	SEARCH_LOADING,
	SEARCH_RESET
} from "../../utils/actionTypes";

const initialState = {
	usersWithRequiredBloodgroup: null,
	requestedUsers: null,
	error: null,
	loading: false
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_SET_REQUESTED_USERS:
			return {
				...state,
				requestedUsers: action.value
			};
		case SEARCH_GET_REQUIRED_USERS:
			return {
				...state,
				usersWithRequiredBloodgroup: action.value
			};

		case SEARCH_ERROR:
			return {
				...state,
				error: action.value
			};

		case SEARCH_LOADING:
			return {
				...state,
				loading: action.value
			};

		case SEARCH_RESET:
			return initialState;

		default:
			return state;
	}
};
