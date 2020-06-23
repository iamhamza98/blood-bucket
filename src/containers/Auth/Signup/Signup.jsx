import React, { Component } from "react";
import { styles, theme } from "./SignupStyles";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import Loader from "../../../components/UI/Loader/Loader";

import { firebase } from "../../../api/firebase";
import SubmitUserData from "./SubmitUserData/SubmitUserData";
class Signup extends Component {
	state = {
		user: null,
		form: {
			email: {
				value: "",
				rules: {
					isEmail: true
				},
				valid: false
			},
			password: {
				value: "",
				rules: {
					isPassword: true,
					minLength: 8,
					maxLength: 32
				},
				valid: false
			}
		},
		isValid: false,
		signupLoading: false,
		signupSuccess: false,
		signupFailure: false
	};

	handleChange = name => event => {
		const form = { ...this.state.form };
		form[name].value = event.target.value;
		this.setState({
			form
		});
	};

	credSubmitHandler = () => {
		this.setState({ signupLoading: true });
		firebase
			.auth()
			.createUserWithEmailAndPassword(
				this.state.form.email.value,
				this.state.form.password.value
			)
			.then(res => {
				console.log(res);
				this.setState({
					signupSuccess: true,
					signupLoading: false,
					user: res.user
				});
			})
			.catch(err => {
				console.log(err);
				this.setState({
					signupFailure: true,
					signupLoading: false
				});
			});
	};

	render() {
		const { classes } = this.props;

		const loader = (
			<div style={{ textAlign: "center" }}>
				<Loader />
			</div>
		);

		const initialPage = this.state.signupLoading ? (
			loader
		) : (
			<Grid container direction="column">
				<Grid item>
					<TextField
						name="email"
						value={this.state.form.email.value}
						type="email"
						label="Email"
						variant="outlined"
						margin="normal"
						onChange={this.handleChange("email")}
					/>
				</Grid>
				<Grid item>
					<TextField
						name="password"
						value={this.state.form.password.value}
						type="password"
						label="Password"
						variant="outlined"
						margin="normal"
						onChange={this.handleChange("password")}
					/>
				</Grid>
				<Grid item>
					<Button
						className={classes.Button}
						variant="contained"
						size="large"
						onClick={this.credSubmitHandler}
					>
						Submit
					</Button>
				</Grid>
			</Grid>
		);

		return (
			<ThemeProvider theme={theme}>
				<div className={classes.SignupRoot}>
					<div className={classes.SignupCred}>
						{this.state.signupSuccess && this.state.user ? (
							<SubmitUserData
								email={this.state.user.email}
								uid={this.state.user.uid}
							/>
						) : (
							initialPage
						)}
					</div>
				</div>
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(Signup);
