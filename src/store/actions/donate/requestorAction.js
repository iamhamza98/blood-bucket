import {
	GET_REQUESTOR_DATA,
	ACCEPT_REQUEST,
	IGNORE_REQUEST,
	REQUESTOR_LOADING,
	REQUESTOR_ERROR,
	REQUESTOR_RESET
} from "../../utils/actionTypes";
import { firebase } from "../../../api/firebase";

import * as functions from "../../utils/functions";

export const getRequestorData = () => dispatch => {
	const requestor = functions.getObject("requestor");
	dispatch({
		type: REQUESTOR_LOADING,
		value: true
	});
	if (requestor) {
		firebase
			.database()
			.ref("users")
			.orderByChild("_id")
			.equalTo(requestor.uid)
			.once("value")
			.then(snap => {
				dispatch({
					type: GET_REQUESTOR_DATA,
					value: snap.val()[0]
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({
					type: REQUESTOR_ERROR,
					value: "Error while retrieving data"
				});
			})
			.finally(() => {
				dispatch({
					type: REQUESTOR_LOADING,
					value: false
				});
			});
	} else {
		dispatch({
			type: REQUESTOR_ERROR,
			value: "There are no requests made yet"
		});
	}
};

export const acceptRequest = () => dispatch => {
	const user = functions.getObject("requestor");
	functions.storeObject("requestor", { ...user, accepted: true });
	dispatch({
		type: ACCEPT_REQUEST,
		value: true
	});
};

export const ignoreRequest = () => dispatch => {
	const user = functions.getObject("requestor");
	functions.storeObject("requestor", { ...user, ignored: true });
	dispatch({
		type: IGNORE_REQUEST,
		value: true
	});
};

export const resetRequestor = () => dispatch => {
	dispatch({
		type: REQUESTOR_RESET
	});
};
