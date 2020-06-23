import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import { theme, styles } from "./RateDonorStyles";

class RateDonor extends Component {
	state = { complaint: "" };
	handleComplaintChange = event => {
		this.setState({ complaint: event.target.value });
	};
	render() {
		const { classes } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<div className={classes.RateRoot}>
					<Typography color="primary" variant="body2">
						Any Complaints or a suggestion?
						<br />
						Feel free to drop your thoughts
					</Typography>
					<TextField
						label="FeedBack"
						value={this.state.complaint}
						multiline
						rowsMax="9"
						margin="normal"
						variant="outlined"
						onChange={this.handleComplaintChange}
					/>
					<Grid container justify="space-evenly">
						<Grid item>
							<Button
								variant="contained"
								size="large"
								onClick={this.submitFeedbackHanlder}
							>
								Submit
							</Button>
						</Grid>
						<Grid item>
							<Button
								variant="outlined"
								size="large"
								onClick={this.skipFeedbackHanlder}
							>
								Skip
							</Button>
						</Grid>
					</Grid>
				</div>
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(RateDonor);
