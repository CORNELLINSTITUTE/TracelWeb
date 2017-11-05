import React, { Component } from "react";
import { Tabs, Tab } from 'material-ui/Tabs';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    tab: {
        border: '2px solid #17aacf'
    },
    book: {
        color: "white",
        border: "2px solid #26d8ef"
    }
};

export default class SearchFlightItemListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            flightDetail: props.flightDetail,
            availableFlights:
            [
                {
                    from: "Christchurch",
                    price: "$200"
                },
                {
                    from: "Wellington",
                    price: "$200"
                },
                {
                    from: "Melbourne",
                    price: "$300"
                },
            ]
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    formatDate(date) {
        let formatDate = new Date(date);

        return (formatDate.toLocaleDateString());
    }

    book(){
        alert('Booked');
    }

    render() {
        // const fromList = this.state.flightDetail.from.map((item, i) => {
        //     return (
        //         <div className="col-md-12">
        //             {item.name}
        //         </div>
        //     )
        // });

        // const dateList = this.state.flightDetail.travelDates.map((item, i) => {
        //     return (
        //         <div className="col-md-12">
        //             {item.date}
        //         </div>
        //     )
        // });

        const flights = this.state.availableFlights.map((item, i) => {
            return (
                <TableRow>
                    <TableRowColumn>{item.from}</TableRowColumn>
                    <TableRowColumn>{item.price}</TableRowColumn>
                    <TableRowColumn><RaisedButton style={styles.book} onClick={this.book} primary={true}>Book</RaisedButton></TableRowColumn>
                </TableRow>
            )
        });

        return (
            <div className="SearchFlightItemListDetail">
                <div className="container">
                    <div className="detail-main">
                        <Tabs>
                            <Tab
                                label="Details"
                                buttonStyle={styles.tab}>
                                <div className="row row-align">
                                    <div className="col-md-6 main-text">
                                        Airline
                                    </div>
                                    <div className="col-md-6 content-item">
                                        {this.state.flightDetail.airline}
                                    </div>
                                </div>
                                <div className="row row-align">
                                    <div className="col-md-6 main-text">
                                        From
                                    </div>
                                    <div className="col-md-6 content-item">
                                        {this.state.flightDetail.departure}
                                    </div>
                                </div>
                                <div className="row row-align">
                                    <div className="col-md-6 main-text">
                                        Travel Dates
                                        </div>
                                    <div className="col-md-6 content-item">
                                        {this.formatDate(this.state.flightDetail.travelDate)}
                                    </div>
                                </div>
                                <div className="row row-align">
                                    <div className="col-md-6 main-text">
                                        Book By
                                    </div>
                                    <div className="col-md-6 content-item">
                                        {this.formatDate(this.state.flightDetail.bookBy)}
                                    </div>
                                </div>
                            </Tab>
                            <Tab
                                label="Book"
                                buttonStyle={styles.tab}>
                                <div className="row available-flights available-flights-tab">
                                    <Table>
                                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                            <TableRow>
                                                <TableHeaderColumn>FROM</TableHeaderColumn>
                                                <TableHeaderColumn>TO</TableHeaderColumn>
                                                <TableHeaderColumn>PRICE</TableHeaderColumn>
                                                <TableHeaderColumn>Flight Date</TableHeaderColumn>
                                                <TableHeaderColumn>OPTION</TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody displayRowCheckbox={false}>
                                            <TableRow>
                                                <TableRowColumn>{this.state.flightDetail.departure}</TableRowColumn>
                                                <TableRowColumn>{this.state.flightDetail.destination}</TableRowColumn>
                                                <TableRowColumn>${this.state.flightDetail.price}</TableRowColumn>
                                                <TableRowColumn>{this.formatDate(this.state.flightDetail.travelDate)}</TableRowColumn>
                                                <TableRowColumn><RaisedButton style={styles.book} onClick={this.book} primary={true}>Book</RaisedButton></TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div >
        )
    }
}