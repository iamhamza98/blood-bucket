import React, { Component } from "react";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import { firebase } from "../../../../api/firebase";
import Loader from "../../../../components/UI/Loader/Loader";
import BloodGroup from "../../../../components/BloodGroup/BloodGroup";

class SubmitUserData extends Component {
	state = {
		form: {
			name: {
				value: "",
				rules: {},
				valid: false
			},
			birthday: {
				value: "",
				age: 0,
				rules: {},
				valid: false
			},
			bloodgroup: {
				value: "",
				rules: {},
				valid: false
			}
		},
		loading: false,
		dataSubmitSuccess: false,
		dataSubmitFailure: false
	};

	handleChange = name => event => {
		const form = { ...this.state.form };
		form[name].value = event.target.value;
		this.setState({
			form
		});
	};

	finishHandler = () => {
		this.setState({ loading: true });
		const data = {
			email: this.props.email,
			name: this.state.form.name.value,
			bloodgroup: this.state.form.bloodgroup.value,
			birthday: this.state.form.birthday.value
		};
		firebase
			.database()
			.ref("users")
			.child(this.props.uid)
			.set(data)
			.then(res => {
				console.log(res);
				this.setState({
					loading: false,
					dataSubmitSuccess: true
				});
			})
			.catch(err => {
				console.log(err);
				this.setState({
					loading: false,
					dataSubmitFailure: true
				});
			});
	};

	render() {
		const loader = (
			<div style={{ textAlign: "center" }}>
				<Loader />
			</div>
		);
		const dataSubmission =
			this.state.dataSubmitFailure || this.state.dataSubmitSuccess ? (
				<Typography color="inherit" variant="body1">
					Sign up {this.state.dataSubmitFailure ? "Failed" : "Success"}
				</Typography>
			) : (
				<Grid container direction="column">
					<Grid item>
						<TextField
							name="name"
							value={this.state.form.name.value}
							type="name"
							label="Name"
							placeholder="Your Full Name"
							variant="outlined"
							margin="normal"
							onChange={this.handleChange("name")}
						/>
					</Grid>
					<Grid item>
						<Typography color="inherit" variant="body1">
							What is your Blood Type
						</Typography>

						<BloodGroup changed={this.handleChange("bloodgroup")} />
					</Grid>
					<Grid item>
						<TextField
							name="birthday"
							value={this.state.form.birthday.value}
							type="date"
							label="Birthday"
							variant="outlined"
							onChange={this.handleChange("birthday")}
							InputLabelProps={{
								shrink: true
							}}
						/>
					</Grid>
					<Grid item>
						<Button
							style={{
								width: "50%",
								position: "relative",
								left: "25%"
							}}
							variant="contained"
							onClick={this.finishHandler}
						>
							Finish
						</Button>
					</Grid>
				</Grid>
			);
		return <div>{this.state.loading ? loader : dataSubmission}</div>;
	}
}

export default SubmitUserData;
