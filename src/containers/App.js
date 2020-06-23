import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "./Home/Home";
import Request from "./Request/Request";
import Donate from "./Donate/Donate";
import Auth from "./Auth/Auth";

class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<Layout>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/request" exact component={Request} />
						<Route path="/donate" exact component={Donate} />
						<Route path="/auth" exact component={Auth} />
					</Switch>
				</Layout>
			</Router>
		);
	}
}

export default App;
