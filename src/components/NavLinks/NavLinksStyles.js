import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
	List: {
		margin: 0,
		display: "flex",
		flexDirection: "column",
		padding: 0,
		"@media (min-width: 600px)": {
			flexDirection: "row"
		}
	},
	ListItem: {
		"@media (min-width: 600px)": {
			height: "64px",
			width: "auto",
			boxSizing: "border-box",
			"&:hover": {
				cursor: "pointer",
				borderBottom: "2px solid white"
			}
		}
	},
	ListIcon: {
		"@media (min-width: 600px)": {
			display: "none"
		}
	},
	".List a": {
		textDecoration: "none",
		color: "black"
	}
});
