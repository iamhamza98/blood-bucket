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

import { NavLink } from "react-router-dom";

import { useStyles } from "./NavLinksStyles";

const NavLinks = props => {
	const styles = useStyles();
	return (
		<Fragment>
			<List className={styles.List}>
				<NavLink to="/" exact>
					<ListItem button className={styles.ListItem}>
						<ListItemIcon className={styles.ListIcon}>
							<Home />
						</ListItemIcon>
						<Typography variant="body1">home</Typography>
					</ListItem>
				</NavLink>
				<NavLink to="/request">
					<ListItem button className={styles.ListItem}>
						<ListItemIcon className={styles.ListIcon}>
							<FlightLand />
						</ListItemIcon>
						<Typography variant="body1">request</Typography>
					</ListItem>
				</NavLink>
				<NavLink to="/donate">
					<ListItem button className={styles.ListItem}>
						<ListItemIcon className={styles.ListIcon}>
							<FlightTakeoff />
						</ListItemIcon>
						<Typography variant="body1">donate</Typography>
					</ListItem>
				</NavLink>

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
				<Divider />
				<NavLink to="/auth">
					<ListItem button className={styles.ListItem}>
						<ListItemIcon className={styles.ListIcon}>
							<AccountBox />
						</ListItemIcon>
						<Typography variant="body1">accounts</Typography>
					</ListItem>
				</NavLink>
			</List>
		</Fragment>
	);
};

export default NavLinks;
