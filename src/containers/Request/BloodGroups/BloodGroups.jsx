import React, { Component } from "react";
import { connect } from "react-redux";
import { setRequiredBloodGroup, setWillingToPay } from "../../../store/actions";
import BloodGroup from "../../../components/BloodGroup/BloodGroup";
import { Typography, Switch } from "@material-ui/core";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { theme, styles } from "./BloodGroupsStyles";

class BloodGroups extends Component {
	render() {
		const { classes } = this.props;
		console.log("BloodGroups.jsx");
		return (
			<ThemeProvider theme={theme}>
				<div className={classes.BloodGroupsRoot}>
					<BloodGroup
						value={this.props.bloodgroup}
						changed={this.props.setRequiredBloodGroup}
					/>
					<Typography color="inherit" variant="body1">
						Do you want to pay?
					</Typography>
					<Switch
						checked={this.props.pay}
						onChange={this.props.setWillingToPay}
						value="pay"
						style={this.props.pay ? { color: "#e2001a" } : null}
						inputProps={{ "aria-label": "secondary checkbox" }}
					/>
				</div>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = state => {
	return {
		bloodgroup: state.bloodgroup.reqBloodgroup,
		pay: state.bloodgroup.pay
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setRequiredBloodGroup: event =>
			dispatch(setRequiredBloodGroup(event.target.value)),
		setWillingToPay: event => dispatch(setWillingToPay(event.target.checked))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(BloodGroups));
