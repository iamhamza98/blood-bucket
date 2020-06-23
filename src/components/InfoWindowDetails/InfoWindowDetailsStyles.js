import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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

export const useStyles = makeStyles({
	Root: {
		width: "200px",
		padding: "0.5em 0.5em 1em 0.5em"
	}
});
