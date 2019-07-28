import React, { Component, Fragment } from "react";
import {
	Grid,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { styles, theme } from "./LoginStyles";
import Loader from "../../../components/UI/Loader/Loader";

class Login extends Component {
	state = {
		form: {
			username: {
				value: "",
				valid: false
			},
			password: {
				value: "",
				valid: false
			}
		},
		formValid: false,
		formSubmitted: false,
		loggedIn: false,
		rememberUser: false,
		errorLogin: false
	};

	credentialChangeHanlder = name => event => {
		const form = { ...this.state.form };
		form[name].value = event.target.value;
		this.setState({ form });
	};

	rememberHanlder = event => {
		this.setState({ rememberUser: event.target.checked });
	};

	loginHandler = () => {
		this.setState({ formSubmitted: true });
		setTimeout(() => {
			console.log("Logged In");
			if (Math.random() > 0.5) this.setState({ loggedIn: true });
			else this.setState({ errorLogin: true });
		}, 2000);
	};

	retryHandler = () => {
		const form = { ...this.state.form };
		form.password.value = "";
		form.username.value = "";
		this.setState({
			form,
			formSubmitted: false,
			loggedIn: false,
			rememberUser: false,
			errorLogin: false
		});
	};

	render() {
		if (this.props.lightBackground) {
			theme.overrides.MuiOutlinedInput.root.color = "#7f797f";
		}
		const { classes } = this.props;
		const afterSubmission =
			this.state.formSubmitted && this.state.loggedIn ? (
				<Typography
					style={{ textAlign: "center" }}
					color="inherit"
					variant="body1"
				>
					Login successful. Please Proceed
				</Typography>
			) : this.state.errorLogin ? (
				<Fragment>
					<Typography
						style={{ textAlign: "center" }}
						color="inherit"
						variant="body1"
					>
						Login Failed. Please Retry
					</Typography>
					<Button
						className={classes.Button}
						size="large"
						variant="outlined"
						onClick={this.retryHandler}
					>
						Retry
					</Button>
				</Fragment>
			) : (
				<div style={{ textAlign: "center" }}>
					<Loader />
				</div>
			);
		const beforeSubmission = (
			<Grid container direction="column">
				<Grid item>
					<TextField
						type="text"
						label="Username"
						value={this.state.form.username.value}
						margin="normal"
						variant="outlined"
						onChange={this.credentialChangeHanlder("username")}
					/>
				</Grid>
				<Grid item>
					<TextField
						type="password"
						label="Password"
						value={this.state.form.password.value}
						margin="normal"
						variant="outlined"
						onChange={this.credentialChangeHanlder("password")}
					/>
				</Grid>
				<Grid item>
					<FormControlLabel
						control={
							<Checkbox
								style={{ color: "#e2001a" }}
								checked={this.state.rememberUser}
								onChange={this.rememberHanlder}
							/>
						}
						label="Remember me"
					/>
				</Grid>
				<Grid item>
					<Button
						className={classes.Button}
						size="large"
						variant="contained"
						onClick={this.loginHandler}
					>
						Log in
					</Button>
				</Grid>
			</Grid>
		);
		return (
			<ThemeProvider theme={theme}>
				<div className={classes.ReqLoginRoot}>
					{this.state.formSubmitted ? afterSubmission : beforeSubmission}
				</div>
			</ThemeProvider>
		);
	}
}

Login.propTypes = {
	lightBackground: PropTypes.bool.isRequired
};

export default withStyles(styles)(Login);
