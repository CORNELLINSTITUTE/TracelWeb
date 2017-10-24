import React, { Component } from "react";

export default class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }


    render() {
        return (
            <div className="Packages">
                <div className="col-sm-6 col-md-3">
                    <div className="dl">
                        <div className="brand">
                            <h2>{this.state.item.title}</h2>
                        </div>
                        <div className={`discount ${this.state.item.color}`}>{this.state.item.discount}
                            <div className="type">{this.state.item.type}</div>
                        </div>
                        <div className="descr">
                            <strong>{this.state.item.topic}</strong>
                            {this.state.item.description}
                        </div>
                        <div className="ends">
                            <small>
                                {this.state.item.conditions}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}