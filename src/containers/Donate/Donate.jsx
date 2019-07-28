import React, { Component } from "react";
import { theme, styles } from "./DonateStyles";
import { ThemeProvider } from "@material-ui/styles";
import { withStyles, Grid, Typography } from "@material-ui/core";
import Login from "../Auth/Login/Login";

class Donate extends Component {
	state = {
		isRef: false,
		reqPerson: {
			name: "John Doe",
			info: "Software Engineer at Fake.Inc",
			phone: "+92 301 2345678",
			address: "Fake House No, Fake Street No, Fake Sector, Fake City",
			social: {
				facebook: "www.facebook.com/donor",
				instagram: "www.instagram.com/donor",
				twitter: "www.twitter.com/donor",
				snapchat: "www.snapchat.com/donor"
			}
		}
	};
	render() {
		const { classes } = this.props;
		const ifRef = this.state.isRef ? null : (
			<Grid className={classes.StepDark} container justify="space-evenly">
				<Grid className={classes.ItemLeft} item sm={6}>
					<div className={classes.ItemLeftContent}>
						<Typography color="inherit" variant="h4">
							Login
						</Typography>
						<Typography color="secondary" variant="h6">
							Sign up Instead
						</Typography>
					</div>
				</Grid>
				<Grid className={classes.ItemRight} item sm={6}>
					<div>
						<Login lightBackground={false} />
					</div>
				</Grid>
			</Grid>
		);
		return (
			<ThemeProvider theme={theme}>
				<div className={classes.DonateRoot}>
					{ifRef}
					<Grid className={classes.StepLight} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div className={classes.ItemLeftContent}>
								<Typography color="primary" variant="body1">
									Request Originator
								</Typography>
								<Typography color="inherit" variant="h4">
									Name
								</Typography>
								<Typography color="primary" variant="h6">
									Public Information
									<br />
									Willing to Pay or not?
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<Typography color="inherit" variant="body1">
									Map view
									<br />
									Accept or deny the request
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepDark} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div className={classes.ItemLeftContent}>
								<Typography color="inherit" variant="h4">
									Check In
								</Typography>
								<Typography color="secondary" variant="h6">
									X minutes away from Request Originator
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								<Typography color="inherit" variant="body1">
									Map view | Arrived
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={classes.StepLight} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div className={classes.ItemLeftContent}>
								<Typography color="inherit" variant="h4">
									Finish Donation
								</Typography>
								<Typography color="primary" variant="h6">
									Receive Payment if any
								</Typography>
							</div>
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

export default withStyles(styles)(Donate);
