import { SET_REQ_BLOODGROUP, SET_PAY } from "../../utils/actionTypes";
const initialState = {
	reqBloodgroup: "",
	pay: false
};

export const bloodGroupReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REQ_BLOODGROUP:
			return { ...state, reqBloodgroup: action.value };
		case SET_PAY:
			return { ...state, pay: action.value };
		default:
			return state;
	}
};
