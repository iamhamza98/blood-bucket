import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
//import Home from "./Home/Home";
import Donate from "./Donate/Donate";

class App extends Component {
	state = {};
	render() {
		return (
			<Layout>
				{/* <Home /> */}
				<Donate />
			</Layout>
		);
	}
}

export default App;
