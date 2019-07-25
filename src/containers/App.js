import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Home from "./Home/Home";

class App extends Component {
	state = {};
	render() {
		return (
			<Layout>
				<Home />
			</Layout>
		);
	}
}

export default App;
