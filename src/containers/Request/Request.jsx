import React, { Component } from "react";
import styles from "./Request.module.css";
import { Typography, Grid } from "@material-ui/core";
import BloodGroups from "./BloodGroups/BloodGroups";
import Donor from "./Donor/Donor";
import Login from "../Auth/Login/Login";
import RateDonor from "./RateDonor/RateDonor";
import Rating from "../../components/UI/Rating/Rating";
class Request extends Component {
	state = {};
	render() {
		console.log("Request.jsx");
		return (
			<div className={styles.RequestRoot}>
				<div className={styles.Request}>
					<Grid className={styles.StepDark} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Log In
								</Typography>
								<Typography style={{ color: "white" }} variant="h6">
									Sign up Instead
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Login lightBackground={false} />
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepLight} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Blood Group
								</Typography>
								<Typography style={{ color: "#7f797f" }} variant="h6">
									Select the blood group you want to request
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<BloodGroups />
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepDark} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Search
								</Typography>
								<Typography style={{ color: "white" }} variant="h6">
									Nearby Donors
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Typography variant="body1">
									Map displaying "on hold" or "available" donors in the
									surrounding area
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepLight} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Donor Name
								</Typography>
								<Typography style={{ color: "#7f797f" }} variant="h6">
									Donor Information
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Donor />
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepDark} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Check In
								</Typography>
								<Typography style={{ color: "white" }} variant="h6">
									Donor X minutes away
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Typography variant="body1">
									Map displaying distance between donor and receiver
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepLight} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Finished
								</Typography>
								<Typography style={{ color: "#7f797f" }} variant="h6">
									Rate Donor
								</Typography>
								<div className={styles.Rating}>
									<Rating />
								</div>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<RateDonor />
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Request;
