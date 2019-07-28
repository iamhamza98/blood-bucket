import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import snapchat from "../../assets/images/snapchat.png";
import instagram from "../../assets/images/instagram.png";

const useStyles = makeStyles({
	GridContainer: {},
	IconButton: {
		borderRadius: 0
	},
	Img: {
		width: "2em",
		height: "2em"
	}
});

const SocialMediaButtons = props => {
	const classes = useStyles();
	return (
		<Grid
			className={classes.GridContainer}
			container
			direction="row"
			justify="center"
		>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked(props.social.facebook)}
				>
					<img className={classes.Img} src={facebook} alt="Facebook Icon" />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked(props.social.instagram)}
				>
					<img className={classes.Img} src={instagram} alt="Instagram Icon" />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked(props.social.twitter)}
				>
					<img className={classes.Img} src={twitter} alt="Twitter Icon" />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked(props.social.snapchat)}
				>
					<img className={classes.Img} src={snapchat} alt="Snapchat Icon" />
				</IconButton>
			</Grid>
			'
		</Grid>
	);
};

SocialMediaButtons.propTypes = {
	clicked: PropTypes.func.isRequired,
	social: PropTypes.object.isRequired
};

export default SocialMediaButtons;
