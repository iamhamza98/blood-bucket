import React from "react";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
	Root: {
		color: "#7f797f",
		margin: "5px"
	},
	Left: {
		width: "50vw"
	},
	Right: {
		width: "50vw"
	}
});

const BloodGroup = props => {
	const classes = useStyles();
	return (
		<FormControl className={classes.Root}>
			<RadioGroup
				name="bloodgroup"
				value={props.value}
				onChange={props.changed}
			>
				<Grid container>
					<Grid className={classes.Left} item sm={6}>
						<Grid container direction="column">
							<Grid item>
								<FormControlLabel
									value="oneg"
									control={<Radio />}
									label="O Negative"
								/>
							</Grid>
							<Grid item>
								<FormControlLabel
									value="opos"
									control={<Radio />}
									label="O Positive"
								/>
							</Grid>
							<Grid item>
								<FormControlLabel
									value="aneg"
									control={<Radio />}
									label="A Negative"
								/>
							</Grid>
							<Grid item>
								<FormControlLabel
									value="apos"
									control={<Radio />}
									label="A Positive"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid className={classes.Right} item sm={6}>
						<Grid container direction="column">
							<Grid item>
								<FormControlLabel
									value="bneg"
									control={<Radio />}
									label="B Negative"
								/>
							</Grid>
							<Grid item>
								<FormControlLabel
									value="bpos"
									control={<Radio />}
									label="B Positive"
								/>
							</Grid>
							<Grid item>
								<FormControlLabel
									value="abneg"
									control={<Radio />}
									label="AB Negative"
								/>
							</Grid>
							<Grid item>
								<FormControlLabel
									value="abpos"
									control={<Radio />}
									label="AB Positive"
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</RadioGroup>
		</FormControl>
	);
};

BloodGroup.propTypes = {
	value: PropTypes.string.isRequired,
	changed: PropTypes.func.isRequired
};

export default BloodGroup;
