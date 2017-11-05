import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

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

class FlightDetails extends Component {
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
            , actionType: ''
            , actionMsg: ''
        };
        // this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
        // this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.deleteFlight = this.deleteFlight.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    componentDidMount() {
        let flightId = this.props.match.params.id;
        axios.get(`http://localhost:4000/api/flights/${flightId}`)
            .then(resp => {
                let flightResp = {
                    title: resp.data.flight.title,
                    description: resp.data.flight.description,
                    airline: resp.data.flight.airline,
                    country: resp.data.flight.country,
                    origin: resp.data.flight.origin,
                    destination: resp.data.flight.destination,
                    expiry: this.formatDate(resp.data.flight.expiry)
                }
                this.setState({
                    flightData: flightResp
                })
                console.log(this.state.flightData)
            })
            .catch(console.error);

    };

    updateflight(flightData) {
        let flightId = this.props.match.params.id;
        axios.post(`http://localhost:4000/api/flights/${flightId}`,
            flightData)
            .then(resp => {
                this.handleOpen();
                console.log(resp);
            }).catch(err => console.log(err));
    }

    deleteFlight() {
        let flightId = this.props.match.params.id;
        axios.delete(`http://localhost:4000/api/flights/${flightId}`)
            .then(resp => {
                console.log(resp);
                this.props.history.push('/flights');
            }).catch(err => console.log(err));
    }

    formatDate(date) {
        let d = new Date(date),
            year = d.getFullYear(),
            month = ("0" + (d.getMonth() + 1)).slice(-2),
            day = ("0" + (d.getDate())).slice(-2);
        let dateFormat = year + '-' + month + '-' + day;
        return (dateFormat === null) ? null : new Date(dateFormat);
    }

    handleSubmitUpdate(e) {
        this.setState({ actionType: 'update', actionMsg: 'Flight Package has been updated.' });
        this.updateflight(this.state.flightData);
        e.preventDefault();
    }

    handleSubmitDelete(e) {
        this.setState({ actionType: 'delete', actionMsg: 'Are you sure you want to delete this Flight Package?' });
        this.handleOpen();
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
        this.setState({ open: false });
    };

    render() {
        const { flightData } = this.state;
        const actionType = this.state.actionType;
        const actionMsg = this.state.actionMsg;
        const actions = [
            <Link to='/flights/'>
                <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />
            </Link>,
        ];
        const actionsDelete = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
            <FlatButton label="Yes" primary={true} onClick={this.deleteFlight} />
        ];

        return (
            <Card>
                <AppBar title="Flight Package Details" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                <CardText>
                    
                    <form onSubmit={this.handleSubmitUpdate.bind(this)} style={styles.formStyle}>

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

                        <RaisedButton type="submit" name="update" label="Update Flight Package" primary={true} style={styles.raisedButton}></RaisedButton>
                        <RaisedButton name="delete" label="Delete Flight Package" secondary={true} style={styles.raisedButton} onClick={this.handleSubmitDelete.bind(this)}></RaisedButton>
                        <Dialog
                            title="Message"
                            actions={(actionType === 'update') ? actions : actionsDelete}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            {actionMsg}
                        </Dialog>
                    </form>

                </CardText>
            </Card>
        )
    }
}

export default FlightDetails;




