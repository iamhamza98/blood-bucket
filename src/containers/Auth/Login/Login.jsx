import React, { Component, Fragment } from "react";
import {
	Grid,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Typography
} from "@material-ui/core";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { styles, theme } from "./LoginStyles";
import Loader from "../../../components/UI/Loader/Loader";
import { firebase } from "../../../api/firebase";

class Login extends Component {
	state = {
		user: null,
		form: {
			email: {
				value: "",
				valid: false
			},
			password: {
				value: "",
				valid: false
			}
		},
		formValid: false,
		loading: false,
		rememberUser: false,
		loginSuccess: false,
		loginFailure: false
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
		this.setState({
			loading: true,
			formSubmitted: true
		});
		firebase
			.auth()
			.signInWithEmailAndPassword(
				this.state.form.email.value,
				this.state.form.password.value
			)
			.then(res => {
				console.log(res);
				this.setState({
					loading: false,
					user: res.user
				});
			})
			.catch(err => {
				console.log(err);
				this.setState({
					loading: false,
					loginFailure: true
				});
			});
	};

	retryHandler = () => {
		const form = { ...this.state.form };
		form.password.value = "";
		form.email.value = "";
		this.setState({
			form,
			formValid: false,
			loading: false,
			rememberUser: false,
			loginSuccess: false,
			loginFailure: false,
			user: null
		});
	};

	render() {
		if (this.props.lightBackground) {
			theme.overrides.MuiOutlinedInput.root.color = "#7f797f";
		}
		const { classes } = this.props;
		const afterSubmission = this.state.loginFailure ? (
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
			<Typography
				style={{ textAlign: "center" }}
				color="inherit"
				variant="body1"
			>
				Login successful. Please Proceed
			</Typography>
		);

		const initial = this.state.loading ? (
			<div style={{ textAlign: "center" }}>
				<Loader />
			</div>
		) : (
			<Grid container direction="column">
				<Grid item>
					<TextField
						type="text"
						label="Email"
						value={this.state.form.email.value}
						margin="normal"
						variant="outlined"
						onChange={this.credentialChangeHanlder("email")}
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
					{this.state.loginFailure || this.state.user
						? afterSubmission
						: initial}
				</div>
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(Login);
