import React, { Component } from "react";
import { connect } from "react-redux";
import {
	acceptRequest,
	ignoreRequest,
	resetRequestor
} from "../../../store/actions";
import Map from "../../../components/Map/Map";
import { Marker, InfoWindow, DirectionsRenderer } from "react-google-maps";
import InfoWindowDetails from "../../../components/InfoWindowDetails/InfoWindowDetails";

class DonorCheckIn extends Component {
	state = {
		selectedUser: null,
		directions: null
	};

	render() {
		return (
			<Map currentUser={this.props.donor}>
				{this.props.requestor && (
					<Marker
						position={this.props.requestor.position}
						onClick={() =>
							this.setState({ selectedUser: this.props.requestor })
						}
					/>
				)}
				{this.state.selectedUser && (
					<InfoWindow
						position={this.state.selectedUser.position}
						onCloseClick={() => this.setState({ selectedUser: null })}
					>
						<InfoWindowDetails user={this.state.selectedUser} />
					</InfoWindow>
				)}
				<DirectionsRenderer directions={this.state.directions} />
			</Map>
		);
	}
}

const mapStateToProps = state => {
	return {
		donor: state.login.userDonor,
		requestStatus: state.requestor.requestStatus,
		requestor: state.requestor.requestorData
	};
};

const mapDispatchToProps = dispatch => {
	return {
		accept: () => dispatch(acceptRequest()),
		ignore: () => dispatch(ignoreRequest()),
		reset: () => dispatch(resetRequestor())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DonorCheckIn);
