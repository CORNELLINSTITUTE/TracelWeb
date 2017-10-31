import React, { Component } from "react";

export default class SearchFlightItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item
        }
    }

    render() {
        let detailImage = {
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.20) 100%), url(" + this.state.item.imagePath + ")",
        }

        return (
            <div className="SearchFlightItemList">
                <div className="detail-content">
                    <div className="detail-list container">
                        <div className="row">
                            <div className="detail-list">
                                <div className="col-md-2 detail-list-image" style={detailImage}></div>
                                <div className="col-md-5 detail-list-content">
                                    <div className="detail-list-title">
                                        {this.state.item.title}
                                    </div>
                                    <div className="detail-list-description">
                                        {this.state.item.description}
                                    </div>
                                </div>
                                <div className="col-md-5 detail-list-actions">
                                    <div className="detail-list-price">{this.state.item.price}</div>
                                    <button class="action">More<i class="ion-plus-circled"></i></button>
                                    <button class="action">Enquire<i class="ion-clipboard"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}