import {
	SEARCH_SET_REQUESTED_USERS,
	SEARCH_GET_REQUIRED_USERS,
	SEARCH_ERROR,
	SEARCH_LOADING,
	REQUESTOR_ERROR,
	SEARCH_RESET
} from "../../utils/actionTypes";
import { firebase } from "../../../api/firebase";
import * as functions from "../../utils/functions";

export const setRequestedUsers = (users, requestor, bloodgroup) => dispatch => {
	if (users) {
		dispatch({
			type: SEARCH_LOADING,
			value: true
		});
		setTimeout(() => {
			const arrUsers = users.reduce((acc, curr) => acc.concat(curr._id), []);
			dispatch({
				type: SEARCH_SET_REQUESTED_USERS,
				value: arrUsers
			});
			functions.storeObject("requestor", {
				uid: requestor,
				bloodgroup: bloodgroup,
				accepted: false,
				ignored: false
			});
			dispatch({
				type: SEARCH_LOADING,
				value: false
			});
			functions.storeObject("requestedUsers", users);
		}, 2000);
	} else {
		dispatch({
			type: REQUESTOR_ERROR,
			error: "No requests have been made yet"
		});
	}
};

export const getRequiredUsers = bloodgroup => dispatch => {
	dispatch({
		type: SEARCH_LOADING,
		value: true
	});
	firebase
		.database()
		.ref("users")
		.orderByChild("bloodgroup")
		.equalTo(bloodgroup)
		.once("value")
		.then(snap => {
			dispatch({
				type: SEARCH_GET_REQUIRED_USERS,
				value: Object.values(snap.val())
			});
		})
		.catch(err => {
			dispatch({
				type: SEARCH_ERROR,
				value: `Cannot get users with required bloodgroup`
			});
		})
		.finally(() => {
			dispatch({
				type: SEARCH_LOADING,
				value: false
			});
		});
};

export const resetSearch = () => dispatch => {
	dispatch({
		type: SEARCH_RESET
	});
};
