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

class VoucherDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            voucherData: {
                name: '',
                code: '',
                discount: '',
                date_start: null,
                date_end: null
            }
        }

    }

    componentDidMount() {
        let voucherId = this.props.match.params.id;
        axios.get(`http://localhost:4000/voucher/getVoucher/${voucherId}`)
            .then(resp => {
                let voucherResp = {
                    name: resp.data.voucher.name,
                    code: resp.data.voucher.code,
                    discount: resp.data.voucher.discount,
                    date_start: this.formatDate(resp.data.voucher.date_start),
                    date_end: this.formatDate(resp.data.voucher.date_end),
                }
                this.setState({
                    voucherData: voucherResp
                })
                console.log(this.state.voucherData)
            })
            .catch(console.error);
    };

    formatDate(date) {
        let d = new Date(date),
            year = d.getFullYear(),
            month = ("0" + (d.getMonth() + 1)).slice(-2),
            day = ("0" + (d.getDate())).slice(-2);
        let dateFormat = year + '-' + month + '-' + day;
        return (dateFormat === null) ? null : new Date(dateFormat);
    }

    render() {
        return (
            <Card>
                <AppBar title="Voucher Details" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                <CardText>
                </CardText>
                </Card>
        );
    };
};

export default VoucherDetails;