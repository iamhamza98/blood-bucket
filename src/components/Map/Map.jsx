import React, { Fragment, PureComponent } from "react";
import { compose, withProps } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";
class Map extends PureComponent {
	render() {
		return (
			<Fragment>
				<GoogleMap
					defaultZoom={15}
					defaultCenter={this.props.currentUser.position}
				/>
				<Marker position={this.props.currentUser.position} />
				{this.props.children}
			</Fragment>
		);
	}
}

export default compose(
	withProps({
		googleMapURL:
			"https://maps.googleapis.com/maps/api/js?key=AIzaSyAMTo7v_eoane-aCQEUEO_xCQJsnrYSb9g&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `70vh` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(Map);
