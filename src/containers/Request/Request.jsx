import React, { Component } from "react";
import { connect } from "react-redux";
import { theme, styles } from "./RequestStyles";
import { Typography, Grid } from "@material-ui/core";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import BloodGroups from "./BloodGroups/BloodGroups";
import Donor from "./Donor/Donor";
import Login from "../Auth/Login/Login";
import RateDonor from "./RateDonor/RateDonor";
import Rating from "../../components/UI/Rating/Rating";
import SearchMap from "./SearchMap/SearchMap";
class Request extends Component {
	render() {
		const { classes } = this.props;
		console.log("Request.jsx");
		return (
			<ThemeProvider theme={theme}>
				<div className={classes.RequestRoot}>
					<Grid className={classes.StepDark} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Log In
								</Typography>
								<Typography style={{ color: "white" }} variant="h6">
									Sign up Instead
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<Login />
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepLight} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Blood Group
								</Typography>
								<Typography style={{ color: "#7f797f" }} variant="h6">
									Select the blood group you want to request
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<BloodGroups />
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepDark} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Search
								</Typography>
								<Typography color="secondary" variant="h6">
									Nearby Donors
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<SearchMap />
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepLight} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Request Results
								</Typography>
								<Typography color="primary" variant="h6">
									Viewed By: 0
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<Donor />
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepDark} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Check In
								</Typography>
								<Typography color="secondary" variant="h6">
									Donor X minutes away
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<Typography color="secondary" variant="body1">
									Map displaying distance between donor and receiver
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepLight} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Finished
								</Typography>
								<Typography color="primary" variant="h6">
									Rate Donor
								</Typography>
								<div className={classes.Rating}>
									<Rating />
								</div>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<RateDonor />
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
		currentUser: state.login.user,
		bloodgroup: state.bloodgroup.reqBloodgroup
	};
};

export default connect(mapStateToProps)(withStyles(styles)(Request));
