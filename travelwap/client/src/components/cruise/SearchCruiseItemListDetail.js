import React, { Component } from "react";
import { Tabs, Tab } from 'material-ui/Tabs';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Cookies from "universal-cookie";
import history from "../history";
import axios from "axios";
import Dialog from 'material-ui/Dialog';
import { Link } from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';

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

export default class SearchCruiseItemListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cruiseDetail: props.cruiseDetail,
            cookies: new Cookies(),
            open: false
        };
    }

    formatDate(date) {
        let formatDate = new Date(date);

        return (formatDate.toLocaleDateString());
    }

    setBooking() {
        let book = {
            user_id: this.state.cookies.get('user_id'),
            username: this.state.cookies.get('username'),
            type_id: this.state.cruiseDetail._id,
            type_name: 'Cruise'
        }

        return book;
    }

    //Add data of the booking
    book() {
        if (this.state.cookies.get('user_id') !== undefined) {
            let newBook = this.setBooking();

            axios.request({
                method: 'post',
                url: 'http://localhost:4000/book/add',
                data: newBook
            }).then(response => {
                this.handleOpenContact();
            }).catch(err => console.log(err));
        }
        else {
            this.handleOpen();
        }
    }
    //Handle the opening of the message 
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleOpenContact = () => {
        this.setState({ openContact: true });
    }

    //Handle the closing of the message 
    handleClose = () => {
        this.setState({ open: false, openContact: false });
    };


    render() {
        //Set message action button
        const actions = [
            <Link to='/Login'>
                <FlatButton label="Sign In" primary={true} keyboardFocused={true} onClick={this.handleClose} />
            </Link>,
            <FlatButton label="Cancel" primary={true} keyboardFocused={true} onClick={this.handleClose} />
        ];

        //Set message action button
        const actionsContact = [
            <Link to='/SearchCruise'>
                <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />
            </Link>,
        ];

        return (
            <div className="SearchCruiseItemListDetail">
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
                                        {this.state.cruiseDetail.airline}
                                    </div>
                                </div>
                                <div className="row row-align">
                                    <div className="col-md-6 main-text">
                                        From
                                    </div>
                                    <div className="col-md-6 content-item">
                                        {this.state.cruiseDetail.departure}
                                    </div>
                                </div>
                                <div className="row row-align">
                                    <div className="col-md-6 main-text">
                                        Travel Dates
                                        </div>
                                    <div className="col-md-6 content-item">
                                        {this.formatDate(this.state.cruiseDetail.travelDate)}
                                    </div>
                                </div>
                                <div className="row row-align">
                                    <div className="col-md-6 main-text">
                                        Book By
                                    </div>
                                    <div className="col-md-6 content-item">
                                        {this.formatDate(this.state.cruiseDetail.bookBy)}
                                    </div>
                                </div>
                            </Tab>
                            <Tab
                                label="Book"
                                buttonStyle={styles.tab}>
                                <div className="row available-cruises available-cruises-tab">
                                    <Table>
                                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                            <TableRow>
                                                <TableHeaderColumn>FROM</TableHeaderColumn>
                                                <TableHeaderColumn>TO</TableHeaderColumn>
                                                <TableHeaderColumn>PRICE</TableHeaderColumn>
                                                <TableHeaderColumn>Cruise Date</TableHeaderColumn>
                                                <TableHeaderColumn>OPTION</TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody displayRowCheckbox={false}>
                                            <TableRow>
                                                <TableRowColumn>{this.state.cruiseDetail.departure}</TableRowColumn>
                                                <TableRowColumn>{this.state.cruiseDetail.destination}</TableRowColumn>
                                                <TableRowColumn>${this.state.cruiseDetail.price}</TableRowColumn>
                                                <TableRowColumn>{this.formatDate(this.state.cruiseDetail.travelDate)}</TableRowColumn>
                                                <TableRowColumn><RaisedButton style={styles.book} onClick={this.book.bind(this)} primary={true}>Book</RaisedButton></TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>

                {/* Message component */}
                <Dialog
                    title="Please SignIn!"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    Please SignIn, to book a cruise
                </Dialog>

                <Dialog
                    title="Thank you!"
                    actions={actionsContact}
                    modal={true}
                    open={this.state.openContact}
                    onRequestClose={this.handleClose}>
                    Thank you! We will get in contact soon
                </Dialog>
            </div >
        )
    }
}