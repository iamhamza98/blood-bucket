import React, { Fragment } from "react";
import {
	List,
	ListItem,
	ListItemIcon,
	Divider,
	Typography
} from "@material-ui/core";
import {
	AccountBox,
	Assessment,
	Home,
	Accessible,
	Work,
	FlightTakeoff,
	FlightLand
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
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
	}
});

const NavLinks = props => {
	const styles = useStyles();
	return (
		<Fragment>
			<List className={styles.List}>
				<ListItem button className={styles.ListItem}>
					<ListItemIcon className={styles.ListIcon}>
						<Home />
					</ListItemIcon>
					<Typography variant="body1">home</Typography>
				</ListItem>
				<ListItem button className={styles.ListItem}>
					<ListItemIcon className={styles.ListIcon}>
						<FlightTakeoff />
					</ListItemIcon>
					<Typography variant="body1">donate</Typography>
				</ListItem>
				<ListItem button className={styles.ListItem}>
					<ListItemIcon className={styles.ListIcon}>
						<FlightLand />
					</ListItemIcon>
					<Typography variant="body1">receive</Typography>
				</ListItem>
				<ListItem button className={styles.ListItem}>
					<ListItemIcon className={styles.ListIcon}>
						<Assessment />
					</ListItemIcon>
					<Typography variant="body1">recent donations</Typography>
				</ListItem>
				<ListItem button className={styles.ListItem}>
					<ListItemIcon className={styles.ListIcon}>
						<Accessible />
					</ListItemIcon>
					<Typography variant="body1">feedback</Typography>
				</ListItem>
				<ListItem button className={styles.ListItem}>
					<ListItemIcon className={styles.ListIcon}>
						<Work />
					</ListItemIcon>
					<Typography variant="body1">about us</Typography>
				</ListItem>
			</List>
			{props.auth ? (
				<Fragment>
					<Divider />
					<List className={styles.ListIcon}>
						<ListItem button className={styles.ListItem}>
							<ListItemIcon className={styles.ListIcon}>
								<AccountBox />
							</ListItemIcon>
							<Typography variant="body1">you</Typography>
						</ListItem>
					</List>
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default NavLinks;
