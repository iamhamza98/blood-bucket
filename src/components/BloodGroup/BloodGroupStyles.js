import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
	overrides: {
		MuiFormControlLabel: {
			root: {
				color: "#7f797f"
			}
		}
	}
});
