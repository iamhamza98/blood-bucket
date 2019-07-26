import React, { Component } from "react";
import styles from "./Donate.module.css";
import { Typography, Grid } from "@material-ui/core";
import SocialMediaButtons from "../../components/UI/SocialMediaButtons/SocialMediaButtons";

class Donate extends Component {
	state = {};
	render() {
		return (
			<div className={styles.DonateRoot}>
				<div className={styles.Elligibility}>
					<div>
						<Typography color="inherit" variant="h4">
							Elligibility
						</Typography>
					</div>
					<div>
						<ul>
							<li>Must be 18yo or above.</li>
							<li>Must have not donated blood in past 3 months.</li>
							<li>BMI must not be lower than normal.</li>
						</ul>
					</div>
				</div>
				<div className={styles.Donation}>
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
								<Typography variant="body1">
									You are already Logged In. Please Proceed
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepLight} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Search
								</Typography>
								<Typography style={{ color: "#7f797f" }} variant="h6">
									Nearby Donation Centers and Choose a Center
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Typography variant="body1">Map view to Search</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepDark} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Appointment
								</Typography>
								<Typography style={{ color: "white" }} variant="h6">
									Drop an Email or Text to ask for an appointment
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Typography variant="body1">Email Form Here</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepLight} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Check In
								</Typography>
								<Typography style={{ color: "#7f797f" }} variant="h6">
									Donate Blood
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Typography variant="body1">
									You have not donated yet
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid className={styles.StepDark} container justify="space-evenly">
						<Grid className={styles.ItemLeft} item sm={6}>
							<div>
								<Typography color="inherit" variant="h4">
									Share on Social Media
								</Typography>
								<Typography style={{ color: "white" }} variant="h6">
									Let your friends know you've helped save a life
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<SocialMediaButtons
									clicked={name => event => {
										event.preventDefault();
										console.log(name);
									}}
								/>
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
									Let us know how we can improve your exprience
								</Typography>
							</div>
						</Grid>
						<Grid className={styles.ItemRight} item sm={6}>
							<div>
								<Typography variant="body1">
									Feedback Form | Skip Instead
								</Typography>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Donate;
