import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
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
        width: '800px'
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
            }, open: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.clearFields = this.clearFields.bind(this);
    };

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
        return (
            <Card>
                <AppBar title="Add Flight Package" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                <CardText>
                    <form onSubmit={this.handleSubmit.bind(this)} style={styles.formStyle}>

                        <TextField type="text" name='title' value={flightData.title} onChange={this.handleChange} floatingLabelText="Title" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField name="description" value={flightData.description} onChange={this.handleChange} floatingLabelText="Description" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField type="text" name="airline" value={flightData.airline} onChange={this.handleChange} floatingLabelText="Airline" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField type="text" name="country" value={flightData.country} onChange={this.handleChange} floatingLabelText="Country" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField type="text" name="origin" value={flightData.origin} onChange={this.handleChange} floatingLabelText="Origin" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField type="text" name="destination" value={flightData.destination} onChange={this.handleChange} floatingLabelText="Destination" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <DatePicker type="text" mode="landscape" name="expiry" floatingLabelText="Expiry Date" value={flightData.expiry} onChange={this.handleChangeDate} />
                        <RaisedButton type="submit" label="Add Flight Package" primary={true} style={styles.raisedButton}></RaisedButton>

                        <Dialog
                            title="Message"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            Flight Package has been Added.
                        </Dialog>
                    </form>

                </CardText>
            </Card>
        )
    }
}

export default AddFlights;


// <input type="submit" value="add" />

// <DatePicker hintText="Landscape Dialog" mode="landscape" name="expiry" value={flightData.expiry} onChange={this.handleChange} floatingLabelText="Expiry Date" />

// <RaisedButton type="submit" label="clear" secondary={true} style={styles.raisedButton} onClick={this.clearFields}></RaisedButton>