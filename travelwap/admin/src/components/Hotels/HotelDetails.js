import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
// import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    appBar: {
        background: '#33691E'
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

class HotelDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotelData: {
                title: '',
                description: '',
                category: '',

            }, open: false
        };
        this.deleteHotel = this.deleteHotel.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    componentDidMount() {
        let hotelId = this.props.match.params.id;
        axios.get(`http://localhost:4000/api/hotels/${hotelId}`)
            .then(resp => {
                let hotelResp = {
                    title: resp.data.hotel.title,
                    description: resp.data.hotel.description,
                    category: resp.data.hotel.category,
                }
                this.setState({
                    hotelData: hotelResp
                })
                console.log(this.state.hotelData)
            })
            .catch(console.error);

    };

    updatehotel(hotelData) {
        let hotelId = this.props.match.params.id;
        axios.post(`http://localhost:4000/api/hotels/${hotelId}`,
            hotelData)
            .then(resp => {
                this.handleOpen();
                console.log(resp);
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

    deleteHotel() {
        let hotelId = this.props.match.params.id;
        axios.delete(`http://localhost:4000/api/hotels/${hotelId}`)
            .then(resp => {
                console.log(resp);
                this.props.history.push('/hotels');
            }).catch(err => console.log(err));
    }

    handleSubmitUpdate(e) {
        this.setState({ actionType: 'update', actionMsg: 'Hotel Package has been updated.' });
        this.updatehotel(this.state.hotelData);
        e.preventDefault();
    }

    handleSubmitDelete(e) {
        this.setState({ actionType: 'delete', actionMsg: 'Are you sure you want to delete this Hotel Package?' });
        this.handleOpen();
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

    handleChangeDate(e, expiry) {
        let hotelData = this.state.hotelData;
        hotelData.expiry = expiry;

        this.setState({
            hotelData: hotelData
        })
    }

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
        this.setState({ open: false });
    };

    render() {
        const { hotelData } = this.state;
        const actionType = this.state.actionType;
        const actionMsg = this.state.actionMsg;
        const actions = [
            <Link to='/hotels/'>
                <FlatButton label="Ok" primary={true} keyboardFocused={true} />
            </Link>,
        ];
        const actionsDelete = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
            <FlatButton label="Yes" primary={true} onClick={this.deleteHotel} />
        ];
        return (
            <Card>
                <AppBar title="Hotel Package Details" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                <CardText>
                    <form onSubmit={this.handleSubmitUpdate.bind(this)} style={styles.formStyle}>

                        <TextField type="text" name='title' value={hotelData.title} onChange={this.handleChange} floatingLabelText="Title" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField name="description" value={hotelData.description} onChange={this.handleChange} floatingLabelText="Description" style={styles.textField} underlineShow={false} />
                        <Divider />
                        <TextField type="text" name="category" value={hotelData.category} onChange={this.handleChange} floatingLabelText="Category" style={styles.textField} underlineShow={false} />
                        <Divider />

                        <RaisedButton type="submit" label="Update Hotel Package" primary={true} style={styles.raisedButton}></RaisedButton>
                        <RaisedButton name="delete" label="Delete Car Package" secondary={true} style={styles.raisedButton} onClick={this.handleSubmitDelete.bind(this)}></RaisedButton>
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

export default HotelDetails;




