import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";
import Logo from "../../components/UI/Logo/Logo";

class Home extends Component {
	state = {};
	render() {
		return (
			<div className={styles.Home}>
				<div className={styles.Welcome}>
					<div className={styles.Logo}>
						<Logo height="100%" />
					</div>
					<div className={styles.Headline}>
						<Typography className={styles.Head1} variant="h4">
							bloodbucket
						</Typography>
						<Typography className={styles.Head2} variant="h5">
							Donate Blood Save Lives
						</Typography>
					</div>
					<div className={styles.Cards}>
						<Cards />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
