import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, IconButton } from "@material-ui/core";
import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter.png";
import snapchat from "../../../assets/images/snapchat.png";
import instagram from "../../../assets/images/instagram.png";

const useStyles = makeStyles({
	GridContainer: {},
	IconButton: {
		width: "3em",
		height: "3em",
		margin: "5px",
		"@media(min-width:600px)": {
			width: "4em",
			height: "4em",
			margin: "0.2em"
		}
	},
	Img: {
		width: "2.5em",
		height: "2.5em"
	}
});

const SocialMediaButtons = props => {
	const classes = useStyles();
	return (
		<Grid
			className={classes.GridContainer}
			container
			direction="row"
			alignItems="flex-start"
		>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked("facebook")}
				>
					<img className={classes.Img} src={facebook} alt="Facebook Icon" />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked("instagram")}
				>
					<img className={classes.Img} src={instagram} alt="Instagram Icon" />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked("twitter")}
				>
					<img className={classes.Img} src={twitter} alt="Twitter Icon" />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					className={classes.IconButton}
					onClick={props.clicked("snapchat")}
				>
					<img className={classes.Img} src={snapchat} alt="Snapchat Icon" />
				</IconButton>
			</Grid>
			'
		</Grid>
	);
};

export default SocialMediaButtons;
