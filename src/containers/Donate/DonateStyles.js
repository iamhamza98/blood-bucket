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
