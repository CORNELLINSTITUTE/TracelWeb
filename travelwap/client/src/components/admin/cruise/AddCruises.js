import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator, DateValidator } from 'react-material-ui-form-validator';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const styles = {
    appBar: {
        background: '#d32f2f'
    },
    formStyle: {
        padding: '20px',
        width: '650px',
    },
    raisedButton: {
        margin: '12px',
        background: '#689F38'
    },
    textField: {
        width: '400px'        
    },
    table_size:{
        width:'600px'
    }
};

export default class AddCruises extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cruiseData: {
                title: '',
                description: '',
                category: '',
            }, open: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearFields = this.clearFields.bind(this);
    };

    addCruises(cruiseData) {
        axios.post('http://localhost:4000/cruise/add',
            cruiseData).then(resp => {
                this.handleOpen();
                console.log(resp);
            }).catch(err => console.log(err));
    }

    handleSubmit(e) {
        this.addCruises(this.state.cruiseData);
        e.preventDefault();
    }

    getFieldValue(target) {
        return target.type === 'checkbox' ? target.checked : target.value;
    }

    handleChange(e) {
        let cruiseData = this.state.cruiseData;
        cruiseData[e.target.name] = this.getFieldValue(e.target);

        this.setState({
            cruiseData: cruiseData
        });
    }

    clearFields() {
        let cruiseData = this.state.cruiseData;
        cruiseData.title = '';
        cruiseData.description = '';
        cruiseData.category = '';

        this.setState({
            cruiseData: cruiseData
        })
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.clearFields();
        this.setState({ open: false });
    };

    //Handles the change in the Departure Date
    handleChangeDepartureDate(e, departureDate) {
        let cruiseData = this.state.cruiseData;
        cruiseData.departureDate = departureDate;

        this.setState({
            cruiseData: cruiseData
        })
    }

     //Handles the change in the Travel Date
     handleChangeTravelDate(e, travelDate) {
        let cruiseData = this.state.cruiseData;
        cruiseData.travelDate = travelDate;

        this.setState({
            cruiseData: cruiseData
        })
    }

    //Disable dates before the current date
    disablePrevDates(startDate) {
        const startSeconds = Date.parse(startDate);
        return (date) => {
            return Date.parse(date) < startSeconds;
        }
    }


    render() {
        // const itinerary = this.state.regions.map((region, i) => {
        //     return (
        //         <MenuItem key={i} value={region.name} primaryText={region.name} />
        //     )
        // })
        const { cruiseData } = this.state;
        const actions = [
            <Link to='/cruises/'>
                <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />
            </Link>,
        ];
        return (
            <Card>
                <AppBar title="Add Cruise Package" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                <CardText>
                    <ValidatorForm onSubmit={this.handleSubmit.bind(this)} style={styles.formStyle}>
                        <TextValidator
                            type="text"
                            name='title'
                            value={cruiseData.title}
                            onChange={this.handleChange}
                            floatingLabelText="Title"
                            style={styles.textField}
                            validators={['required']}
                            errorMessages={['this field is required']} />
                        <TextValidator
                            name="description"
                            value={cruiseData.description}
                            onChange={this.handleChange}
                            floatingLabelText="Description"
                            style={styles.textField}
                            validators={['required']}
                            errorMessages={['this field is required']} />
                        <TextValidator
                            type="text"
                            name="ship"
                            value={cruiseData.ship}
                            onChange={this.handleChange}
                            floatingLabelText="Ship"
                            style={styles.textField}
                            validators={['required']} errorMessages={['this field is required']} />
                        <TextValidator
                            type="text"
                            name="departingInfo"
                            value={cruiseData.departingInfo}
                            onChange={this.handleChange}
                            floatingLabelText="Departing Info"
                            style={styles.textField}
                            validators={['required']} errorMessages={['this field is required']} />
                        <TextValidator
                            type="text"
                            name="price"
                            value={cruiseData.price}
                            onChange={this.handleChange}
                            floatingLabelText="Price"
                            style={styles.textField}
                            validators={['required']} errorMessages={['this field is required']} />
                        <TextValidator
                            type="text"
                            name="journey"
                            value={cruiseData.journey}
                            onChange={this.handleChange}
                            floatingLabelText="Journey"
                            style={styles.textField}
                            validators={['required']} errorMessages={['this field is required']} />
                        <DateValidator
                            type="text"
                            mode="landscape"
                            name="departureDate"
                            floatingLabelText="Departure Date"
                            value={cruiseData.departureDate}
                            onChange={this.handleChangeDepartureDate.bind(this)}
                            shouldDisableDate={this.disablePrevDates(new Date())}
                            validators={['required']}
                            errorMessages={['you must pick a date']} />
                        <DateValidator
                            type="text"
                            mode="landscape"
                            name="travelDate"
                            floatingLabelText="Travel Date"
                            value={cruiseData.travelDate}
                            onChange={this.handleChangeTravelDate.bind(this)}
                            shouldDisableDate={this.disablePrevDates(new Date())}
                            validators={['required', 'isDateValid']}
                            errorMessages={['you must pick a date', 'Invalid Date']} />
                            <br/>
                        <Table style={styles.table_size}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>Day</TableHeaderColumn>
                                    <TableHeaderColumn>Date</TableHeaderColumn>
                                    <TableHeaderColumn>Port</TableHeaderColumn>
                                    <TableHeaderColumn>Arrive</TableHeaderColumn>
                                    <TableHeaderColumn>Depart</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody  displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>1</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <RaisedButton type="submit" label="Add Cruise Package" primary={true} style={styles.raisedButton}></RaisedButton>

                        <Dialog
                            title="Message"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            Cruise Package has been Added.
                        </Dialog>
                    </ValidatorForm>
                </CardText>
            </Card>
        )
    }
}
