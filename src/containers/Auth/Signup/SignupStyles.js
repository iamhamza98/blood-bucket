import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			colorInherit: {
				color: "#e2001a"
			},
			colorPrimary: {
				color: "#7f797f"
			}
		},
		MuiButton: {
			root: {
				borderRadius: 0,
				margin: "2em 0"
			},
			contained: {
				backgroundColor: "#e2001a",
				color: "white",
				"&:hover": {
					backgroundColor: "#E64765"
				}
			},
			outlined: {
				border: "1px solid #e2001a",
				color: "#e2001a",
				"&:hover": {
					backgroundColor: "#e2001a",
					color: "white"
				}
			}
		},
		MuiTextField: {
			root: {
				width: "100%",
				margin: "1em 0"
			}
		},
		MuiOutlinedInput: {
			root: {
				color: "#7f797f"
			},
			notchedOutline: {
				borderRadius: 0,
				borderColor: "#e2001a !important"
			}
		},
		MuiInputLabel: {
			root: {
				color: "#e2001a !important"
			}
		}
	}
});

export const styles = {
	SignupRoot: {
		width: "80%",
		margin: "0 auto",
		"@media(min-width:600px)": {
			width: "60%"
		},
		"@media(min-width:1500px)": {
			width: "40%"
		}
	},
	Button: {
		width: "50%",
		position: "relative",
		left: "25%"
	}
};
