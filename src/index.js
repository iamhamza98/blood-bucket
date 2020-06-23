import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
	bloodGroupReducer,
	loginReducer,
	searchReducer,
	requestorReducer
} from "./store/reducers";

const reducer = combineReducers({
	bloodgroup: bloodGroupReducer,
	login: loginReducer,
	search: searchReducer,
	requestor: requestorReducer
});

const app = (
	<Provider store={createStore(reducer, applyMiddleware(thunk))}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
