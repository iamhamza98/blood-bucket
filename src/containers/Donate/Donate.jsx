import React, { Component, Fragment } from "react";
import { theme, styles } from "./DonateStyles";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { withStyles, Grid, Typography } from "@material-ui/core";
import Login from "../Auth/Login/Login";
import { getRequestorData } from "../../store/actions";
import Loader from "../../components/UI/Loader/Loader";
import DonorCheckIn from "./DonorCheckIn/DonorCheckIn";

class Donate extends Component {
	state = {
		isRef: false
	};

	componentDidMount() {
		this.props.getRequestorData();
	}

	render() {
		const { classes } = this.props;
		const loader = (
			<div style={{ textAlign: "center" }}>
				<Loader />
			</div>
		);
		const userInfo = this.props.requestor ? (
			<Fragment>
				<Typography color="secondary" variant="body1">
					Request Originator
				</Typography>
				<Typography color="inherit" variant="h4">
					{this.props.requestor.name}
				</Typography>
				<Typography color="secondary" variant="body1">
					Has donated to {this.props.requestor.donatedTo.length} people
				</Typography>
			</Fragment>
		) : (
			<Typography color="secondary" variant="body1">
				Requestor Information will appear here
			</Typography>
		);

		const errorInfo = (
			<Typography color="inherit" variant="body1">
				{this.props.error}
			</Typography>
		);

		const ifRef = this.state.isRef ? null : (
			<Grid className={classes.StepLight} container justify="space-evenly">
				<Grid className={classes.ItemLeft} item sm={6}>
					<Typography color="inherit" variant="h4">
						Log In
					</Typography>
					<Typography color="secondary" variant="h6">
						Sign up Instead
					</Typography>
				</Grid>
				<Grid className={classes.ItemRight} item sm={6}>
					<div>
						<Login lightBackground />
					</div>
				</Grid>
			</Grid>
		);
		return (
			<ThemeProvider theme={theme}>
				<div className={classes.DonateRoot}>
					{ifRef}
					<Grid className={classes.StepDark} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							{this.props.loading
								? loader
								: this.props.error
								? errorInfo
								: userInfo}
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<DonorCheckIn />
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepLight} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<Typography color="inherit" variant="h4">
								Finish Donation
							</Typography>
							<Typography color="primary" variant="h6">
								Receive Payment if any
							</Typography>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<Typography color="inherit" variant="body1">
									Mark as Finished
								</Typography>
							</div>
						</Grid>
					</Grid>
				</div>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = state => {
	return {
		requestor: state.requestor.requestorData,
		loading: state.requestor.loading,
		error: state.requestor.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getRequestorData: () => dispatch(getRequestorData())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Donate));
