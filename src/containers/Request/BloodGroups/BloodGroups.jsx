import React, { Component, Fragment } from "react";
import BloodGroup from "../../../components/BloodGroup/BloodGroup";
import { Typography, Switch } from "@material-ui/core";

class BloodGroups extends Component {
	state = {
		blood: "",
		pay: false
	};

	bloodGroupHanlder = event => {
		this.setState({ blood: event.target.value });
	};

	payHandler = event => {
		this.setState({ pay: event.target.checked });
	};

	render() {
		console.log("BloodGroups.jsx");
		return (
			<Fragment>
				<BloodGroup value={this.state.blood} changed={this.bloodGroupHanlder} />
				<Typography color="inherit" variant="body1">
					Do you want to pay?
				</Typography>
				<Switch
					checked={this.state.pay}
					onChange={this.payHandler}
					value="pay"
					style={this.state.pay ? { color: "#e2001a" } : null}
					inputProps={{ "aria-label": "secondary checkbox" }}
				/>
			</Fragment>
		);
	}
}

export default BloodGroups;
