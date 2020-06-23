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
	BloodGroupsRoot: {
		width: "80%",
		margin: "0 auto"
	}
};
