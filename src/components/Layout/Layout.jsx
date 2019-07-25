import React, { Fragment, useState } from "react";
import styles from "./Layout.module.css";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../UI/Logo/Logo";
import Footer from "../Footer/Footer";

const Layout = props => {
	const [drawer, setDrawer] = useState(false);

	const toggleDrawer = open => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setDrawer(open);
	};

	const sideList = (
		<div
			className={styles.SideList}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<Logo height="100px" />
			<div className={styles.NavList}>
				<NavLinks />
			</div>
		</div>
	);

	return (
		<Fragment>
			<header className={styles.Header}>
				<AppBar position="static">
					<Toolbar className={styles.AppBar}>
						<div className={styles.SideDrawerIcon}>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="Menu"
								onClick={() => setDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
						</div>
						<Typography variant="h5" style={{ flexGrow: 1 }}>
							bloodbucket
						</Typography>
						<div className={styles.NavItems}>
							<NavLinks />
						</div>
					</Toolbar>
				</AppBar>
				<Drawer open={drawer} onClose={toggleDrawer(false)}>
					{sideList}
				</Drawer>
			</header>
			<main>{props.children}</main>
			<footer className={styles.FooterLayout}>
				<Footer />
			</footer>
		</Fragment>
	);
};

export default Layout;
