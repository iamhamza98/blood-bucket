import {
	GET_REQUESTOR_DATA,
	ACCEPT_REQUEST,
	IGNORE_REQUEST,
	REQUESTOR_LOADING,
	REQUESTOR_ERROR,
	REQUESTOR_RESET
} from "../../utils/actionTypes";

const initialState = {
	requestorData: null,
	loading: false,
	error: null,
	requestStatus: {
		accepted: false,
		ignored: false
	}
};

export const requestorReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_REQUESTOR_DATA:
			return {
				...state,
				requestorData: action.value
			};

		case ACCEPT_REQUEST:
			return {
				...Object.assign({}, state, {
					requestStatus: {
						accepted: action.value,
						ignored: false
					}
				})
			};

		case IGNORE_REQUEST:
			return {
				...Object.assign({}, state, {
					requestStatus: {
						accepted: false,
						ignored: action.value
					}
				})
			};

		case REQUESTOR_LOADING:
			return {
				...state,
				loading: action.value
			};

		case REQUESTOR_ERROR:
			return {
				...state,
				error: action.value
			};

		case REQUESTOR_RESET: {
			return initialState;
		}

		default:
			return state;
	}
};
