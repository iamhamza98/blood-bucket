import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			colorInherit: {
				color: "#e2001a"
			},
			colorPrimary: {
				color: "#7f797f"
			},
			colorSecondary: {
				color: "white"
			}
		}
	}
});

export const styles = {
	StepDark: {
		minHeight: "100vh",
		backgroundColor: "#252627",
		"@media(min-width:600px)": {
			alignItems: "center"
		}
	},
	StepLight: {
		minHeight: "100vh",
		"@media(min-width:600px)": {
			alignItems: "center"
		}
	},
	ItemLeft: {
		width: "100%",
		alignSelf: "center",
		textAlign: "center",
		"@media(min-width:600px)": {
			width: "50%",
			alignSelf: "unset",
			textAlign: "right",
			padding: "1em"
		}
	},
	ItemRight: {
		width: "100%",
		alignSelf: "flex-start",
		"@media(min-width:600px)": {
			width: "50%",
			alignSelf: "unset",
			padding: "1em"
		}
	},
	ItemLeftContent: {
		"@media(min-width:600px)": {
			textAlign: "right"
		}
	},
	Rating: {
		display: "flex",
		justifyContent: "center",
		"@media(min-width:600px)": {
			justifyContent: "flex-end"
		}
	}
};
