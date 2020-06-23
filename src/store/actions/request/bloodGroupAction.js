import { SET_REQ_BLOODGROUP, SET_PAY } from "../../utils/actionTypes";

export const setRequiredBloodGroup = bg => dispatch => {
	dispatch({
		type: SET_REQ_BLOODGROUP,
		value: bg
	});
};

export const setWillingToPay = pay => dispatch => {
	dispatch({
		type: SET_PAY,
		value: pay
	});
};
