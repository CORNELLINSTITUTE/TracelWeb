import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
// import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
// import Proptypes from 'prop-types';

const styles = {
    appBar: {
        background: '#33691E    '
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

class AddHotels extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotelData: {
                title: '',
                description: '',
                category: '',
            }, open: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleChangeDate = this.handleChangeDate.bind(this);
        this.clearFields = this.clearFields.bind(this);
    };

    addHotels(hotelData) {
        axios.post('http://localhost:4000/api/hotels/',
            hotelData).then(resp => {
                this.handleOpen();
                console.log(resp);
            }).catch(err => console.log(err));
    }

    handleSubmit(e) {
        this.addHotels(this.state.hotelData);
        e.preventDefault();
    }

    getFieldValue(target) {
        return target.type === 'checkbox' ? target.checked : target.value;
    }

    handleChange(e) {
        let hotelData = this.state.hotelData;
        hotelData[e.target.name] = this.getFieldValue(e.target);

        this.setState({
            hotelData: hotelData
        });
    }

    // handleChangeDate(e, expiry) {
    //     let hotelData = this.state.hotelData;
    //     hotelData.expiry = expiry;

    //     this.setState({
    //         hotelData: hotelData
    //     })
    // }

    clearFields() {
        let hotelData = this.state.hotelData;
        hotelData.title = '';
        hotelData.description = '';
        hotelData.category = '';
        
        this.setState({
            hotelData: hotelData
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
        const { hotelData } = this.state;
        const actions = [
            <Link to='/hotels/'>
                <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />
            </Link>,
        ];
        return (
            <Card>
                <AppBar title="Add Hotel Package" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                <CardText>
                    <form onSubmit={this.handleSubmit.bind(this)} style={styles.formStyle}>

                        <TextField type="text" name='title' value={hotelData.title} onChange={this.handleChange} floatingLabelText="Title" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField name="description" value={hotelData.description} onChange={this.handleChange} floatingLabelText="Description" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField type="text" name="category" value={hotelData.airline} onChange={this.handleChange} floatingLabelText="Category" style={styles.textField} underlineShow={false} />
                        <Divider />
                        
                        <RaisedButton type="submit" label="Add Hotel Package" primary={true} style={styles.raisedButton}></RaisedButton>

                        <Dialog
                            title="Message"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            Hotel Package has been Added.
                        </Dialog>
                    </form>

                </CardText>
            </Card>
        )
    }
}

export default AddHotels;
