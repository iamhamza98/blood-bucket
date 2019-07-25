import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CardItem from "../../components/Card/Card";

class Cards extends Component {
	state = {
		cards: [
			{
				title: "what we do",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque. Sem integer vitae justo eget magna fermentum",
				link: "what-we-do"
			},
			{
				title: "why donate",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque. Sem integer vitae justo eget magna fermentum",
				link: "why-donate"
			},
			{
				title: "need blood?",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque. Sem integer vitae justo eget magna fermentum",
				link: "need-blood"
			},
			{
				title: "how it works",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque. Sem integer vitae justo eget magna fermentum",
				link: "how-it-works"
			}
		]
	};

	cardActionHandler = text => {
		alert(text);
	};

	render() {
		return (
			<div className={styles.Cards}>
				<Grid container sm={12}>
					{this.state.cards.map(card => (
						<Grid item sm={6}>
							<CardItem
								cardTitle={card.title}
								cardContent={card.content}
								cardBtnAction={() => this.cardActionHandler(card.link)}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
}

export default Cards;
