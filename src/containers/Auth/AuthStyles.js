import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			colorInherit: {
				color: "#e2001a"
			}
		},
		MuiButton: {
			text: {
				textTransform: "none",
				color: "#7f797f",
				"&:hover": {
					backgroundColor: "white"
				}
			}
		}
	}
});

export const styles = {
	StepLight: {
		minHeight: "100vh",
		"@media(min-width:600px)": {
			alignItems: "center"
		}
	},
	ItemLeft: {
		width: "100%",
		padding: "0.5em 1em",
		alignSelf: "center",
		textAlign: "center",
		"@media(min-width:600px)": {
			width: "50%",
			alignSelf: "unset"
		}
	},
	ItemRight: {
		width: "100%",
		padding: "0.5em 1em",
		alignSelf: "flex-start",
		"@media(min-width:600px)": {
			width: "50%",
			alignSelf: "unset"
		}
	},
	ItemLeftContent: {
		"@media(min-width:600px)": {
			textAlign: "right"
		}
	}
};
