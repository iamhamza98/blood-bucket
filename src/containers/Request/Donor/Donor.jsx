import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import Loader from "../../../components/UI/Loader/Loader";
import SocialMediaButtons from "../../../components/SocialMediaButtons/SocialMediaButtons";

const styles = {
	SendReqButton: {
		width: "50%",
		backgroundColor: "#e2001a",
		color: "white",
		borderRadius: 0,
		position: "relative",
		left: "25%",
		"&:hover": {
			backgroundColor: "#E64765"
		},
		"@media(min-width:600px)": {
			width: "33%",
			left: "33%"
		}
	},
	CancelReqButton: {
		width: "50%",
		borderColor: "#e2001a",
		color: "#e2001a",
		borderRadius: 0,
		position: "relative",
		left: "25%",
		marginTop: "1em",
		"&:hover": {
			backgroundColor: "#e2001a",
			color: "white"
		},
		"@media(min-width:600px)": {
			width: "33%",
			left: "33%"
		}
	},
	Loader: {
		textAlign: "center"
	},
	ResponseRoot: {
		"@media(min-width:600px)": {
			width: "75%",
			margin: "0 auto"
		}
	},
	Social: {
		marginTop: "2em"
	}
};

class Donor extends Component {
	state = {
		requestSent: false,
		responseReceived: false,
		donorData: {
			name: "John Doe",
			info: "I help save a life, once in three months. I'm a superhero",
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

	requestSendHanlder = () => {
		this.setState({ requestSent: true });
		setTimeout(() => {
			this.setState({ responseReceived: true });
		}, 2000);
	};

	requestCancelHanlder = () => {
		this.setState({ requestSent: false });
	};

	socialMediaClickHanlder = link => event => {
		alert(link);
	};

	render() {
		console.log(this.state.requestSent);
		const { classes } = this.props;
		const beforeResponse = this.state.requestSent ? (
			<Fragment>
				<div className={classes.Loader}>
					<Loader />
				</div>
				<Button
					className={classes.CancelReqButton}
					onClick={this.requestCancelHanlder}
					size="large"
					variant="outlined"
				>
					Cancel
				</Button>
			</Fragment>
		) : (
			<Button
				className={classes.SendReqButton}
				onClick={this.requestSendHanlder}
				variant="contained"
				size="large"
			>
				Request
			</Button>
		);

		const afterResponse = (
			<div className={classes.ResponseRoot}>
				<div>
					<Typography color="inherit" variant="h6">
						Phone
					</Typography>
					<Typography style={{ color: "#7f797f" }} variant="body1">
						{this.state.donorData.phone}
					</Typography>
				</div>
				<div>
					<Typography color="inherit" variant="h6">
						Address
					</Typography>
					<Typography style={{ color: "#7f797f" }} variant="body1">
						{this.state.donorData.address}
					</Typography>
				</div>
				<div className={classes.Social}>
					<SocialMediaButtons
						clicked={this.socialMediaClickHanlder}
						social={this.state.donorData.social}
					/>
				</div>
			</div>
		);

		return (
			<div>{this.state.responseReceived ? afterResponse : beforeResponse}</div>
		);
	}
}

export default withStyles(styles)(Donor);
