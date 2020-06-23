import React from "react";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	Grid
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./BloodGroupStyles";
import PropTypes from "prop-types";

const BloodGroup = props => {
	return (
		<ThemeProvider theme={theme}>
			<FormControl>
				<RadioGroup
					name="bloodgroup"
					value={props.value}
					onChange={props.changed}
				>
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
				</RadioGroup>
			</FormControl>
		</ThemeProvider>
	);
};

BloodGroup.propTypes = {
	value: PropTypes.string,
	changed: PropTypes.func.isRequired
};

export default BloodGroup;
