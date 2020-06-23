import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import { theme, styles } from "./SearchMapStyles";
import Map from "../../../components/Map/Map";
import {
	setRequestedUsers,
	getRequiredUsers,
	resetSearch
} from "../../../store/actions";
import { Marker, InfoWindow } from "react-google-maps";
import InfoWindowDetails from "../../../components/InfoWindowDetails/InfoWindowDetails";
import Loader from "../../../components/UI/Loader/Loader";

class SearchMap extends Component {
	state = {
		selectedUser: null
	};

	componentDidUpdate(prevProps) {
		if (prevProps.bloodgroup !== this.props.bloodgroup) {
			this.props.reset();
			this.props.getRequiredUsers(this.props.bloodgroup);
		}
	}

	setSelectedUser = user => {
		this.setState({
			selectedUser: user
		});
	};

	render() {
		const { classes } = this.props;
		const searchingPeople = this.props.usersWithRequiredBloodgroup
			? this.props.usersWithRequiredBloodgroup.map(user => (
					<Marker
						key={user._id}
						position={user.position}
						onClick={() => this.setSelectedUser(user)}
					/>
			  ))
			: null;

		const errorMessage = this.props.error ? (
			<Typography variant="body1" color="secondary">
				{this.props.error}
			</Typography>
		) : (
			<Typography variant="body1" color="secondary">
				Operation Completed Successfully
			</Typography>
		);

		const searchAction = !this.props.requestedUsers ? (
			this.props.bloodgroup ? (
				<Button
					className={classes.Button}
					variant="outlined"
					onClick={() => {
						this.props.setRequestedUsers(
							this.props.usersWithRequiredBloodgroup,
							this.props.requestor._id,
							this.props.bloodgroup
						);
					}}
				>
					Request All
				</Button>
			) : (
				<Typography variant="body1" color="secondary">
					Select a Bloodgroup
				</Typography>
			)
		) : (
			errorMessage
		);

		return (
			<ThemeProvider theme={theme}>
				<Map currentUser={this.props.requestor}>
					{searchingPeople}
					{this.state.selectedUser && (
						<InfoWindow
							position={this.state.selectedUser.position}
							onCloseClick={() => this.setSelectedUser(null)}
						>
							<InfoWindowDetails user={this.state.selectedUser} />
						</InfoWindow>
					)}
					<div style={{ textAlign: "center" }}>
						{this.props.loading ? <Loader /> : searchAction}
					</div>
				</Map>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = state => ({
	requestor: state.login.user,
	bloodgroup: state.bloodgroup.reqBloodgroup,
	usersWithRequiredBloodgroup: state.search.usersWithRequiredBloodgroup,
	loading: state.search.loading,
	requestedUsers: state.search.requestedUsers
});

const mapDispatchToProps = dispatch => ({
	setRequestedUsers: (users, id, bloodgroup) =>
		dispatch(setRequestedUsers(users, id, bloodgroup)),
	getRequiredUsers: bloodgroup => dispatch(getRequiredUsers(bloodgroup)),
	reset: () => dispatch(resetSearch())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(SearchMap));
