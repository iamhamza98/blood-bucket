import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			root: {
				margin: "1em 0"
			},
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
		MuiButton: {
			root: {
				margin: "1em 0",
				borderRadius: 0
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
		}
	}
});

export const styles = {
	ControlsRoot: {
		height: "20vh"
	}
};
