import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
// import Home from "./Home/Home";
import Request from "./Request/Request";
import Donate from "./Donate/Donate";

class App extends Component {
	state = {};
	render() {
		return (
			<Layout>
				{/* <Home />
						<Request /> */}
				<Donate />
			</Layout>
		);
	}
}

export default App;
