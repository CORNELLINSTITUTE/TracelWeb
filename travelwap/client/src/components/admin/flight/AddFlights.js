import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator, SelectValidator, DateValidator } from 'react-material-ui-form-validator';

// import Proptypes from 'prop-types';

const styles = {
    appBar: {
        background: '#3F51B5'
    },
    formStyle: {
        padding: '20px'
    },
    raisedButton: {
        margin: '12px',
        background: '#689F38'
    },
    textField: {
        width: '300px'
    }
};

class AddFlights extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flightData: {
                title: '',
                description: '',
                airline: '',
                country: '',
                origin: '',
                destination: '',
                expiry: null
            },
            open: false,
            regions: [],
            cities: [],
            disableCity: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.clearFields = this.clearFields.bind(this);
    };
    componentWillMount() {
        this.getRegion();
    }

    getRegion() {
        axios.get('http://localhost:4000/region/getAll')
            .then(response => {
                if (response.data.length !== 0) {
                    this.setState({ regions: response.data })
                }
                else {
                    alert('Region not found');
                }
            }).catch(err => console.log(err));
    }

    getCities(region) {
        axios.get('http://localhost:4000/city/getCitiesByRegion?region=' + region)
            .then(response => {
                this.setState({ cities: response.data })
            }).catch(err => console.log(err));
    }

    addFlights(flightData) {
        axios.post('http://localhost:4000/api/flights/',
            flightData).then(resp => {
                this.handleOpen();
                console.log(resp);
            }).catch(err => console.log(err));
    }

    handleSubmit(e) {
        this.addFlights(this.state.flightData);
        e.preventDefault();
    }

    getFieldValue(target) {
        return target.type === 'checkbox' ? target.checked : target.value;
    }

    handleChange(e) {
        let flightData = this.state.flightData;
        flightData[e.target.name] = this.getFieldValue(e.target);

        this.setState({
            flightData: flightData
        });
    }

    handleChangeDate(e, expiry) {
        let flightData = this.state.flightData;
        flightData.expiry = expiry;

        this.setState({
            flightData: flightData
        })
    }

    //Handles the changes in the region field
    handleChangeRegion(e, index, region) {
        let flightData = this.state.flightData;
        flightData.region = region;

        this.setState({ flightData: flightData });

        //Get cities data by region
        this.getCities(region);
        this.setState({ disableCity: false });
    };

    clearFields() {
        let flightData = this.state.flightData;
        flightData.title = '';
        flightData.description = '';
        flightData.airline = '';
        flightData.country = '';
        flightData.origin = '';
        flightData.destination = '';
        flightData.expiry = null;
        this.setState({
            flightData: flightData
        })
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.clearFields();
        this.setState({ open: false });
    };

    render() {
        const { flightData } = this.state;
        const actions = [
            <Link to='/flights/'>
                <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />
            </Link>,
        ];
        const region = this.state.regions.map((region, i) => {
            return (
                <MenuItem key={i} value={region.name} primaryText={region.name} />
            )
        })
        const cities = this.state.cities.map((city, i) => {
            return (
                <MenuItem key={i} value={city.name} primaryText={city.name} />
            )
        })

        return (
            <Card>
                <AppBar title="Add Flight Package" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                <CardText>
                    <ValidatorForm onSubmit={this.handleSubmit.bind(this)} style={styles.formStyle}>
                        <TextValidator
                            type="text"
                            name='title'
                            value={flightData.title}
                            onChange={this.handleChange}
                            floatingLabelText="Title"
                            style={styles.textField}
                            validators={['required']}
                            errorMessages={['this field is required']} />
                        <TextValidator
                            name="description"
                            value={flightData.description}
                            onChange={this.handleChange}
                            floatingLabelText="Description"
                            style={styles.textField}
                            validators={['required']}
                            errorMessages={['this field is required']} />
                        <TextValidator
                            type="text"
                            name="airline"
                            value={flightData.airline}
                            onChange={this.handleChange}
                            floatingLabelText="Airline"
                            style={styles.textField}
                            validators={['required']}
                            errorMessages={['this field is required']} />
                        <TextValidator
                            type="text"
                            name="airline"
                            value={flightData.departure}
                            onChange={this.handleChange}
                            floatingLabelText="Departure"
                            style={styles.textField}
                            validators={['required']}
                            errorMessages={['this field is required']} />
                        <SelectValidator
                            floatingLabelText="Region"
                            name="region"
                            value={flightData.region}
                            onChange={this.handleChangeRegion.bind(this)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            floatingLabelFocusStyle={styles.text_color_focused}
                            floatingLabedisableCitylStyle={styles.text_color}
                            labelStyle={styles.text_color}
                        >
                            {region}
                        </SelectValidator>
                        <SelectValidator
                            floatingLabelText="Destination"
                            name="destination"
                            value={flightData.destination}
                            onChange={this.handleChangeDestination}
                            validators={['required']}
                            disabled={this.state.disableCity}
                            errorMessages={['this field is required']}
                            floatingLabelFocusStyle={styles.text_color_focused}
                            floatingLabelStyle={styles.text_color}
                            labelStyle={styles.text_color}
                        >
                            {cities}
                        </SelectValidator>

                        <DateValidator
                            type="text"
                            mode="landscape"
                            name="expiry"
                            floatingLabelText="Travel Date"
                            value={flightData.expiry}
                            onChange={this.handleChangeDate}
                            validators={['required']}
                            errorMessages={['you must pick a date']} />
                        <DateValidator
                            type="text"
                            mode="landscape"
                            name="bookBy"
                            floatingLabelText="Book By"
                            value={flightData.expiry}
                            onChange={this.handleChangeDate}
                            validators={['required']}
                            errorMessages={['you must pick a date']} />
                        <RaisedButton type="submit" label="Add Flight Package" primary={true} style={styles.raisedButton}></RaisedButton>

                        <Dialog
                            title="Message"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            Flight Package has been Added.
                        </Dialog>
                    </ValidatorForm>

                </CardText>
            </Card >
        )
    }
}

export default AddFlights;


// <input type="submit" value="add" />

// <DatePicker hintText="Landscape Dialog" mode="landscape" name="expiry" value={flightData.expiry} onChange={this.handleChange} floatingLabelText="Expiry Date" />

// <RaisedButton type="submit" label="clear" secondary={true} style={styles.raisedButton} onClick={this.clearFields}></RaisedButton>