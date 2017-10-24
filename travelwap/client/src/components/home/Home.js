import React, { Component } from "react";
import axios from "axios";
import './Home.css';
import Packages from './Packages'

export default class Home extends Component {
	/**********************/
	//FUNCTIONS
	/**********************/
	constructor() {
		super();

		this.state = {
			packages:
			[
				{
					title: "Norita",
					discount: "15%",
					type: "off",
					topic: "Travel to west of Japan",
					description: "Japan is an amazing country, with thousands of places to explore",
					conditions: "* Conditions and restrictions apply.",
					color: "alizarin"
				},
				{
					title: "Manila",
					discount: "20%",
					type: "off",
					topic: "Travel to the biggest city in the Philipines",
					description: "Come to the amazing city of Manila",
					conditions: "* Conditions and restrictions apply.",
					color: "peter-river"
				},
				{
					title: "Sao Paulo",
					discount: "50%",
					type: "off",
					topic: "Visit one of Brazil's biggest city",
					description: "Complete pack wit Hotel, Car rent and Flight for a cheap price",
					conditions: "* Conditions and restrictions apply.",
					color: "amethyst"
				},
				{
					title: "Rio de Janeiro",
					discount: "50%",
					type: "off",
					topic: "Visit one of Brazil's biggest city",
					description: "Complete pack wit Hotel, Car rent and Flight for a cheap price",
					conditions: "* Conditions and restrictions apply.",
					color: "emerald"
				},
			]
		}
	}

	/**********************/
	//TEMPLATE
	/**********************/
	render() {
		const packageItem = this.state.packages.map((packageItem, i) => {
			return (
				<Packages key={packageItem.id} item={packageItem} />
			)
		})

		return (
			<div className="Home">
				<section className="section-showcase">
					<section id="labels">
						<div className="container">
							<div className="row">
								{packageItem}
							</div>
						</div>
					</section>
				</section>
			</div>
		);
	}
}