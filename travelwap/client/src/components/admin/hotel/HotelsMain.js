import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Card, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

const styles = {
    divContainer: {
        padding: '10px'
    },
    appBar: {
        background: '#1B5E20'
    },
    raisedButton: {
        margin: '12px'
    },
    link: {
        textDecoration: 'none'
    }

};

class HotelsMain extends Component {
    state = { hotels: [] }
    componentDidMount() {
        axios.get('http://localhost:4000/hotel/getAll')
            .then(resp => {
                this.setState({
                    hotels: resp.data.hotels
                });
            })
            .catch(console.error)
    }

    render() {
        const { hotels } = this.state;
        return (
            <div>
                <Card>
                    <AppBar title="Hotels" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={styles.appBar} />
                    <CardText>
                        <Table selectable={false}>
                            <TableBody displayRowCheckbox={false}>
                                {
                                    hotels.map((hotel, index) => (
                                        <TableRow key={hotel._id}>
                                            <TableRowColumn>
                                                <Link to={`/adminHotel/details/${hotel._id}`} style={styles.link}>
                                                    <MenuItem className="text-center">
                                                        {hotel.title}
                                                    </MenuItem>
                                                </Link>
                                            </TableRowColumn>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default HotelsMain;

