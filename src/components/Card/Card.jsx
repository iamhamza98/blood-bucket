import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Typography,
	Button
} from "@material-ui/core";

const useStyles = makeStyles({
	Card: {
		width: "95%",
		margin: "10px auto",
		borderRadius: 0
	},
	CardTitle: {
		backgroundColor: "#e2001a",
		color: "white"
	},
	CardContent: {
		color: "#7f797f"
	},
	CardAction: {
		color: "#e2001a"
	}
});

const CardItem = props => {
	const styles = useStyles();
	return (
		<Card className={styles.Card}>
			<CardHeader className={styles.CardTitle} title={props.cardTitle} />
			<CardContent>
				<Typography className={styles.CardContent} variant="body1">
					{props.cardContent}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className={styles.CardAction} onClick={props.cardBtnAction}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

CardItem.propTypes = {
	cardTitle: PropTypes.string.isRequired,
	cardContent: PropTypes.string.isRequired,
	cardBtnAction: PropTypes.func.isRequired
};

export default CardItem;
