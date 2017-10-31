import React, { Component } from "react";
import SearchFlightItem from "./SearchFlightItem";

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
                    imagePath: require("../../images/search/oceania.jpeg")                    
                },
                {
                    id: 2,
                    name: "Asia",
                    imagePath: require("../../images/search/asia.jpeg"),
                },
                {
                    id: 3,
                    name: "North America",
                    imagePath: require("../../images/search/north_america.jpeg"),
                },
                {
                    id: 4,
                    name: "South America",
                    imagePath: require("../../images/search/south_america.jpeg"),
                },
                {
                    id: 5,
                    name: "Africa",
                    imagePath: require("../../images/search/africa.jpeg"),
                },
                {
                    id: 6,
                    name: "Europe",
                    imagePath: require("../../images/search/europe.jpeg"),
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