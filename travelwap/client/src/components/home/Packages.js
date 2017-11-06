import React, { Component } from "react";
import Countdown from 'react-count-down';
import { Link } from "react-router-dom";

export default class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    handleOnComplete() {
        console.log('end of time');
    }

    calculateSeconds(date) {
        let expire_date_seconds = (date.getTime() / 1000);
        let current_date_seconds = (new Date().getTime() / 1000);
        console.log(expire_date_seconds);
        console.log(current_date_seconds);
        let seconds = expire_date_seconds - current_date_seconds;

        return seconds;
    }

    render() {
        const cb = () => {
            console.log('expired callback')
        }

        const OPTIONS = { endDate: this.state.item.expire_date, prefix: 'to end', cb }

        const CountdownComponent = () => (
            <Countdown options={OPTIONS} />
        )

        let divImage = {
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%,rgba(0,0,0,0.50) 100%), url(" + this.state.item.imagePath + ")"
        }

        return (
            <div className="Packages">
                <div className="col-sm-6 col-md-3">
                    <Link to='/'>
                        <div className="dl" style={divImage}>
                            <div className="countdown">
                                <CountdownComponent />
                            </div>
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
                    </Link>
                </div>
            </div>
        );
    }
}