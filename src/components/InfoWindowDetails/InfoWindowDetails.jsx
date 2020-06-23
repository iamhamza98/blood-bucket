import React from "react";
import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme, useStyles } from "./InfoWindowDetailsStyles";
const InfoWindowDetails = ({ user }) => {
	const classes = useStyles();
	const bloodGroups = {
		oneg: "O-",
		opos: "O+",
		aneg: "A-",
		apos: "A+",
		bneg: "B-",
		bpos: "B+",
		abneg: "AB-",
		abpos: "AB+"
	};
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.Root}>
				<Typography color="inherit" variant="h6">
					{user.name}
				</Typography>
				<Typography color="primary" variant="body1">
					Age: {user.age}
				</Typography>
				<Typography color="primary" variant="body1">
					Gender: {user.gender}
				</Typography>
				<Typography color="primary" variant="body1">
					BloodGroup: {bloodGroups[user.bloodgroup]}
				</Typography>
				<Typography color="primary" variant="body2">
					{user.about}
				</Typography>
			</div>
		</ThemeProvider>
	);
};

export default InfoWindowDetails;
