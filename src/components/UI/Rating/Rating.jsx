import React, { useState } from "react";
import styles from "./Rating.module.css";

const Rating = props => {
	const [rating, setRating] = useState(0);
	return (
		<fieldset
			className={styles.Rating}
			onChange={event => setRating(event.target.value)}
		>
			<input type="radio" id="star5" name="rating" value={5} />
			<label
				className={styles.full}
				htmlFor="star5"
				title="Awesome - 5 stars"
			/>

			<input type="radio" id="star4half" name="rating" value={4.5} />
			<label
				className={styles.half}
				htmlFor="star4half"
				title="Pretty good - 4.5 stars"
			/>

			<input type="radio" id="star4" name="rating" value={4} />
			<label
				className={styles.full}
				htmlFor="star4"
				title="Pretty good - 4 stars"
			/>

			<input type="radio" id="star3half" name="rating" value={3.5} />
			<label
				className={styles.half}
				htmlFor="star3half"
				title="Meh - 3.5 stars"
			/>

			<input type="radio" id="star3" name="rating" value={3} />
			<label className={styles.full} htmlFor="star3" title="Meh - 3 stars" />

			<input type="radio" id="star2half" name="rating" value={2.5} />
			<label
				className={styles.half}
				htmlFor="star2half"
				title="Kinda bad - 2.5 stars"
			/>

			<input type="radio" id="star2" name="rating" value={2} />
			<label
				className={styles.full}
				htmlFor="star2"
				title="Kinda bad - 2 stars"
			/>

			<input type="radio" id="star1half" name="rating" value={1.5} />
			<label
				className={styles.half}
				htmlFor="star1half"
				title="Meh - 1.5 stars"
			/>

			<input type="radio" id="star1" name="rating" value={1} />
			<label
				className={styles.full}
				htmlFor="star1"
				title="Sucks big time - 1 star"
			/>

			<input type="radio" id="starhalf" name="rating" value={0.5} />
			<label
				className={styles.half}
				htmlFor="starhalf"
				title="Sucks big time - 0.5 stars"
			/>
		</fieldset>
	);
};

export default Rating;
