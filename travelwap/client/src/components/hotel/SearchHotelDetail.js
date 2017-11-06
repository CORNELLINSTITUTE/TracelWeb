import React, { Component } from "react";
import SearchHotelItemList from "./SearchHotelItemList";
import axios from "axios";

export default class SearchHotelDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {            
            hotelList: []            
        }
    }
    /******************/
    /*FUNCTION*/
    /******************/
    componentWillMount(){
        this.getHotels(this.props.match.params.name);
    }

    getHotels(region){
        axios.get('http://localhost:4000/hotel/getHotelsByRegion/'+region)
        .then(response => {
            if (response.data.length !== 0) {
                this.setState({ hotelList: response.data.hotels })
            }
            else {
                alert('No hotels available');
            }
        }).catch(err => console.log(err));
    }

    /******************/
    /*TEMPLATE*/
    /******************/
    render() {
        const items = this.state.hotelList.map((item, i) => {
			return (
				<SearchHotelItemList item={item} />
			)
        });

        let divImage = {
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.20) 100%), url(" + require("../../images/search/oceania.jpeg") + ")",
        }

        return (
            <div className="SearchHotelDetail">
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