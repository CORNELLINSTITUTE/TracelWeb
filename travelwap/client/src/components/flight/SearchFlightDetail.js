import React, { Component } from "react";
import SearchFlightItemList from "./SearchFlightItemList";
import axios from "axios";

export default class SearchFlightDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            detailList: 
            [
                {
                    title: "Melbourne with Qantas",
                    description: "One Way Economy Class Flight",
                    imageName: "oceania.jpeg",
                    price: "$199"                    
                },
                {
                    title: "Sydney with Qantas",
                    description: "One Way Economy Class Flight",
                    imageName: "asia.jpeg",
                    price: "$199"                    
                },
                {
                    title: "Brisbane with Qantas",
                    description: "One Way Economy Class Flight",
                    imageName: "oceania.jpeg",
                    price: "$199"                    
                },
                {
                    title: "Auckland with Qantas",
                    description: "One Way Economy Class Flight",
                    imageName: "oceania.jpeg",
                    price: "$199"                    
                },
                {
                    title: "Christchurch with Qantas",
                    description: "One Way Economy Class Flight",
                    imageName: "oceania.jpeg",
                    price: "$199"                    
                },
                {
                    title: "Queenstown with Qantas",
                    description: "One Way Economy Class Flight",
                    imageName: "oceania.jpeg",
                    price: "$199"                    
                }
            ],
            flightList: []            
        }
    }
    /******************/
    /*FUNCTION*/
    /******************/
    componentWillMount(){
        this.getFlights(this.props.match.params.name);
    }

    getFlights(region){
        axios.get('http://localhost:4000/flight/getFlightsByRegion?region='+region)
        .then(response => {
            if (response.data.length !== 0) {
                console.log(response.data);
                this.setState({ flightList: response.data })
            }
            else {
                alert('No flights available');
            }
        }).catch(err => console.log(err));
    }

    /******************/
    /*TEMPLATE*/
    /******************/
    render() {
        const items = this.state.flightList.map((item, i) => {
			return (
				<SearchFlightItemList item={item} />
			)
        });

        let divImage = {
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.20) 100%), url(" + require("../../images/search/" + this.props.match.params.image) + ")",
        }

        return (
            <div className="SearchFlightDetail">
                <div className="detail-main">
                    <div className="container">
                        <div className="row">
                            <div className="title">
                                {this.props.match.params.name}
                            </div>
                        </div>
                        <div className="row">
                            <div className="detail-image" style={divImage}></div>
                            {items}                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}