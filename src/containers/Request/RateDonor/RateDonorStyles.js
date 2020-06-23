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
		},
		MuiTextField: {
			root: {
				width: "100%"
			}
		},
		MuiOutlinedInput: {
			root: {
				alignItems: "unset"
			},
			notchedOutline: {
				borderRadius: 0,
				borderColor: "#e2001a !important"
			},
			multiline: {
				height: "200px",
				alignContent: "unset"
			}
		},
		MuiInputLabel: {
			root: {
				color: "#e2001a !important"
			}
		},
		MuiInputBase: {
			root: {
				color: "#7f797f"
			}
		},
		MuiButton: {
			root: {
				borderRadius: 0,
				margin: "1em 0",
				width: "100%"
			},
			contained: {
				backgroundColor: "#e2001a",
				color: "white",
				"&:hover": {
					backgroundColor: "#E64765"
				}
			},
			outlined: {
				borderColor: "#e2001a",
				color: "#e2001a"
			}
		}
	}
});

export const styles = {
	RateRoot: {
		width: "80%",
		margin: "0 auto",
		"@media(min-width:600px)": {
			width: "60%"
		}
	},
	Rating: {
		width: "160px",
		margin: "1em auto"
	}
};
