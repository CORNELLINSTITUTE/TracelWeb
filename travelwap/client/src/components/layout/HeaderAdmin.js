import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const styles = {
    appBar: {
        background: '#363636'
    },
    drawer: {
        paddingTop: '100px',
        background: '#607D8B'
    },
    link: {
        textDecoration: 'none'
    },
    menuItem: {
        fontWeight: 'bold',
        color: '#131313',
        borderBottom: '2px solid #78909C'
    },
    iconHome: {
        color: '#FFEB3B'
    },
    iconFlight: {
        color: '#0D47A1'
    },
    iconHotel: {
        color: '#1B5E20'
    },
    iconCruise: {
        color: '#d32f2f'
    },
    iconVoucher: {
        color: '#EF6C00'
    },
    divider: {
        color: '#cccccc'
    }
}

class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <AppBar title="Travelwap Admin" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleToggle} style={styles.appBar} />
                <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({ open })} containerStyle={styles.drawer} >

                    <Link to='/admin' onClick={this.handleClose} style={styles.link}>
                        <MenuItem style={styles.menuItem}>
                            <div className='col-sm-3'>
                                <i className="fa fa-home fa-lg" style={styles.iconHome} aria-hidden="true"></i>
                            </div>
                            <div className='col-sm-9'>Home</div>
                        </MenuItem>
                    </Link>
                    <Link to='/adminFlight/' onClick={this.handleClose} style={styles.link}>
                        <MenuItem style={styles.menuItem}>
                            <div className='col-sm-3'>
                                <i className="fa fa-plane fa-lg" style={styles.iconFlight} aria-hidden="true"></i>
                            </div>
                            <div className='col-sm-9'>Flights</div>
                        </MenuItem>
                    </Link>
                    <Link to='/adminHotel/' onClick={this.handleClose} style={styles.link}>
                        <MenuItem style={styles.menuItem}>
                            <div className='col-sm-3'>
                                <i className="fa fa-bed fa-lg" style={styles.iconHotel} aria-hidden="true"></i>
                            </div>
                            <div className='col-sm-9'>Hotels</div>
                        </MenuItem>
                    </Link>
                    <Link to='/adminCruise/' onClick={this.handleClose} style={styles.link}>
                        <MenuItem style={styles.menuItem}>
                            <div className='col-sm-3'>
                                <i className="fa fa-ship fa-lg" style={styles.iconCruise} aria-hidden="true"></i>
                            </div>
                            <div className='col-sm-9'>Cruise</div>
                        </MenuItem>
                    </Link>
                    <Link to='/adminVoucher/' onClick={this.handleClose} style={styles.link}>
                        <MenuItem style={styles.menuItem}>
                            <div className='col-sm-3'>
                                <i className="fa fa-tag fa-lg" style={styles.iconVoucher} aria-hidden="true"></i>
                            </div>
                            <div className='col-sm-9'>Voucher</div>
                        </MenuItem>
                    </Link>

                </Drawer>
            </div>
        )
    }
}

export default HeaderNav;



