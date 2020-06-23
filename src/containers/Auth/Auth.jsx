import React, { Component } from "react";
import { styles, theme } from "./AuthStyles";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

class Auth extends Component {
	state = {
		isLogin: false
	};

	switchStateHanlder = () => {
		this.setState(prevState => ({ isLogin: !prevState.isLogin }));
	};

	render() {
		const { classes } = this.props;
		const authState = this.state.isLogin
			? {
					main: "Log In",
					button: "Not a member?"
			  }
			: {
					main: "Sign up",
					button: "Already have an account?"
			  };
		return (
			<ThemeProvider theme={theme}>
				<div className={classes.AuthRoot}>
					<Grid className={classes.StepLight} container justify="space-evenly">
						<Grid className={classes.ItemLeft} item sm={6}>
							<div className={classes.ItemLeftContent}>
								<Typography color="inherit" variant="h4">
									{authState.main}
								</Typography>
								<Button variant="text" onClick={this.switchStateHanlder}>
									{authState.button}
								</Button>
							</div>
						</Grid>
						<Grid className={classes.ItemRight} item sm={6}>
							<div>
								{this.state.isLogin ? <Login lightBackground /> : <Signup />}
							</div>
						</Grid>
					</Grid>
				</div>
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(Auth);
