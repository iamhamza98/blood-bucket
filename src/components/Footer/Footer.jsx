import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "./Footer.module.css";

const Footer = props => {
	return (
		<div className={styles.Footer}>
			<Grid container>
				<Grid item sm={12} className={styles.Footer1Row}>
					<Typography className={styles.Title} variant="h3" color="inherit">
						bloodbucket
					</Typography>
					<Typography
						className={styles.SubTitle}
						variant="body1"
						color="inherit"
					>
						You can save a life
					</Typography>
				</Grid>
			</Grid>
			<Grid container className={styles.Footer2Row}>
				<Grid item sm={6}>
					<div className={styles.Divider} />
					<Grid container direction="column">
						<Grid container direction="column">
							<Grid item>
								<Typography variant="button" color="inherit">
									Visit
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									bloodbucket.Inc
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									1E Fake Building
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									Fake State
								</Typography>
							</Grid>
						</Grid>
						<div className={styles.Divider} />
						<Grid container direction="column">
							<Grid item>
								<Typography variant="button" color="inherit">
									Business
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									contact@bloodbucket.com
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									+92 301 2345678
								</Typography>
							</Grid>
						</Grid>
						<div className={styles.Divider} />
						<Grid container direction="column">
							<Grid item>
								<Typography variant="button" color="inherit">
									Legal
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									Terms
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									Privacy
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sm={6}>
					<div className={styles.Divider} />
					<Grid container direction="column">
						<Grid container direction="column">
							<Grid item>
								<Typography variant="button" color="inherit">
									Follow
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									Instagram
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									Twitter
								</Typography>
								<Typography variant="subtitle2" color="inherit">
									LinkedIn
								</Typography>
							</Grid>
						</Grid>
						<div className={styles.Divider} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
