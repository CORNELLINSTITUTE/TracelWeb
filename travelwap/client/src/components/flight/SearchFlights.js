import React, { Component } from "react";
import SearchFlightItem from "./SearchFlightItem";
import "./Flight.css";

export default class SearchFlight extends Component {
    constructor(props){
        super(props);

        this.state = {
            // item: props.item,
            searchItems: 
            [
                {
                    id: 1,
                    name: "Oceania",
                    nameImage: "oceania.jpeg"
                },
                {
                    id: 2,
                    name: "Asia",
                    nameImage: "asia.jpeg"
                },
                {
                    id: 3,
                    name: "North America",
                    nameImage: "north_america.jpeg"
                },
                {
                    id: 4,
                    name: "South America",
                    nameImage: "south_america.jpeg"
                },
                {
                    id: 5,
                    name: "Africa",
                    nameImage: "africa.jpeg"
                },
                {
                    id: 6,
                    name: "Europe",
                    nameImage: "europe.jpeg"
                }
            ]
        }
    }


    render() {
        const items = this.state.searchItems.map((searchItem, i) => {
			return (
				<SearchFlightItem item={searchItem} />
			)
        })
        
        return (
            <div className="SearchFlight">
                <div className="flight-main">
                    <div className="container">
                        <div className="row">
                            {items}
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}